"use server";

import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY || "missing_key");

const contactSchema = z.object({
  name: z.string().min(2, "Name is too short"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(5, "Message is too short"),
});

export async function sendContactEmail(formData: FormData) {
  try {
    const rawData = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    const validatedData = contactSchema.parse(rawData);

    const emailHtml = `
      <div style="font-family: sans-serif; max-width: 600px; margin: auto; border: 1px solid #eee; padding: 25px; border-radius: 12px; background-color: #fff;">
        <h2 style="color: #800080; border-bottom: 2px solid #800080; padding-bottom: 10px;">New Contact Message</h2>
        <p><strong>Name:</strong> ${validatedData.name}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <div style="margin-top: 20px; padding: 15px; background-color: #f9f9f9; border-radius: 8px;">
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap; color: #444;">${validatedData.message}</p>
        </div>
        <p style="color: #777; font-size: 12px; margin-top: 25px; padding-top: 10px; border-top: 1px solid #eee;">
          Sent from Prayas Graphics website at ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
        </p>
      </div>
    `;

    const { data, error } = await resend.emails.send({
      from: "Prayas Graphics <onboarding@resend.dev>",
      to: "prayasgraphics77@gmail.com",
      subject: `New Message from ${validatedData.name} - Prayas Graphics`,
      html: emailHtml,
      replyTo: validatedData.email,
    });

    if (error) {
      console.error("Resend Email Error:", error);
      return { success: false, error: "Failed to send email. Please try again later." };
    }

    return { success: true, message: "Thank you for reaching out! We'll get back to you soon." };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, error: error.issues[0].message };
    }
    console.error("Contact submission error:", error);
    return { success: false, error: "Internal server error. Please try again." };
  }
}
