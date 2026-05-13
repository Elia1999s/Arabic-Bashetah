import { NextResponse } from "next/server";
import Stripe from "stripe";

// Initialize Stripe with a fallback so it doesn't crash if env var is missing during build
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "sk_test_mock", {
});

export async function POST(req: Request) {
  try {
    const { priceId, email } = await req.json();

    if (!process.env.STRIPE_SECRET_KEY || process.env.STRIPE_SECRET_KEY === "sk_test_mock") {
      console.warn("Stripe Secret Key missing. Returning a simulated checkout URL.");
      // In a real app without Stripe key, we can't do much. 
      // We will redirect to a fake success page for demonstration.
      return NextResponse.json({ url: "/dashboard?success=mock" });
    }

    // Determine the price based on the selected plan (mock logic for demo)
    const isOneTime = priceId === "one_time" || priceId === "mock_price_id"; // default to full
    const amount = isOneTime ? 279900 : 25000; // 2799 ILS for one time, or 250 ILS for monthly (example)

    const session = await stripe.checkout.sessions.create({
      // Enable automatic payment methods to support Apple Pay, Google Pay, and other configured methods
      // Note: Bit (ביט) is not natively supported by Stripe and requires a local Israeli payment gateway 
      // like Meshulam, Morning (Green Invoice), or Tranzila.
      payment_method_types: ["card"], // Using card which includes Apple/Google Pay in Stripe Checkout
      line_items: [
        {
          price_data: {
            currency: "ils",
            product_data: {
              name: isOneTime ? "קורס ערבית בשטח - מסלול פרימיום מלא" : "קורס ערבית בשטח - תשלום חודשי",
            },
            unit_amount: amount, // Amount in agorot (e.g. 279900 = 2799 ILS)
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      customer_email: email || undefined,
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/dashboard?success=true`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/pricing?canceled=true`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    console.error("Stripe error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
