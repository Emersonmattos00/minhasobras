import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(request) {
  const { price, title } = await request.json();

  if (!price || !title) {
    return NextResponse.json({ error: "Missing price or title" }, { status: 400 });
  }


  const paymentIntent = await stripe.paymentIntents.create({
    amount: price,
    currency: "brl",
    description: `Compra do livro ${title}`,
  });

  return new Response(
    JSON.stringify({ clientSecret: paymentIntent.client_secret }),
    {
      headers: { "Content-Type": "application/json" },
    }
  );
}
