import { NextResponse } from "next/server";
import Stripe from "stripe";

// Initialize Stripe with a fallback so it doesn't crash if env var is missing during build
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "sk_test_mock", {

});

export async function POST(req: Request) {
  try {
    const { priceId, email } = await req.json();

    if (!process.env.STRIPE_SECRET_KEY) {
      console.warn("Stripe Secret Key missing. Returning a simulated checkout URL.");
      // In a real app without Stripe key, we can't do much. 
      // We will redirect to a fake success page for demonstration.
      return NextResponse.json({ url: "/dashboard?success=mock" });
    }

    // Usually priceId is something like price_1Nxxxxx or we can use line_items with price_data
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "ils",
            product_data: {
              name: "קורס ערבית בשטח - מסלול פרימיום מלא",
            },
            unit_amount: 23990, // 2399 ILS in agorot
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      customer_email: email,
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/dashboard?success=true`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/pricing?canceled=true`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    console.error("Stripe error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
