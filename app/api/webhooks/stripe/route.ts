import { NextResponse } from "next/server";
import Stripe from "stripe";
import { createClient } from "@supabase/supabase-js";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "sk_test_mock", {});
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

export async function POST(req: Request) {
  try {
    const body = await req.text();
    const signature = req.headers.get("stripe-signature") as string;

    let event: Stripe.Event;

    if (webhookSecret) {
      try {
        event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
      } catch (err: any) {
        console.error("Webhook signature verification failed.", err.message);
        return NextResponse.json({ error: err.message }, { status: 400 });
      }
    } else {
      event = JSON.parse(body);
    }

    if (event.type === "checkout.session.completed") {
      const session = event.data.object as Stripe.Checkout.Session;
      
      const customerEmail = session.customer_details?.email;
      const customerName = session.customer_details?.name;

      console.log(`Payment successful for: ${customerEmail}`);

      const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
      const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

      if (supabaseUrl && supabaseKey && customerEmail) {
        const supabase = createClient(supabaseUrl, supabaseKey);
        
        const { error } = await supabase
          .from("users")
          .upsert([
            { 
              email: customerEmail, 
              full_name: customerName,
              has_access: true,
              stripe_customer_id: session.customer as string,
              updated_at: new Date().toISOString()
            }
          ], { onConflict: "email" });

        if (error) {
          console.error("Failed to fulfill purchase in DB:", error);
        } else {
          console.log("Purchase fulfilled in DB successfully.");
        }
      }
    }

    return NextResponse.json({ received: true });
  } catch (err: any) {
    console.error("Webhook error:", err);
    return NextResponse.json({ error: "Webhook handler failed" }, { status: 500 });
  }
}
