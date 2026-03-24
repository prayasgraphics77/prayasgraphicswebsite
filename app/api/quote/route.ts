import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Simulate API latency
    await new Promise((resolve) => setTimeout(resolve, 800));

    // In a real application, you would integrate EmailJS, Resend, Twilio, or Formspree here.
    // E.g., const res = await fetch("https://submit-form.com/your-form", { ... })

    console.log("New Quote Request Received:");
    console.log(JSON.stringify(body, null, 2));

    return NextResponse.json({ success: true, message: "Quote submitted successfully." });
  } catch (error) {
    console.error("Error submitting quote:", error);
    return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
  }
}
