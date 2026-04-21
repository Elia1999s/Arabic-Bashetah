import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({
    ok: true,
    message: "Replace this mock Stripe webhook with real signature verification and order fulfillment."
  });
}
