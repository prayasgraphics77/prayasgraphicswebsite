import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY || "missing_key");

const enquirySchema = z.object({
  items: z.array(z.any()),
  totalEstimatedPrice: z.number(),
  customerDetails: z.object({
    fullName: z.string().min(1, "Full name is required"),
    whatsapp: z.string().min(1, "WhatsApp number is required"),
    city: z.string().min(1, "City is required"),
    businessName: z.string().optional(),
    urgency: z.string().optional(),
  }),
});

export async function POST(request: Request) {
  try {
    const rawBody = await request.json();
    const validatedData = enquirySchema.parse(rawBody);
    
    const { items, totalEstimatedPrice, customerDetails } = validatedData;

    let dbError: any = null;
    // 1. Log to Supabase
    if (supabase) {
      const { error } = await supabase
        .from("customer_enquiries")
        .insert({
          customer_name: customerDetails.fullName,
          customer_whatsapp: customerDetails.whatsapp,
          customer_city: customerDetails.city,
          items,
          total_estimated_rate: totalEstimatedPrice,
          status: "pending",
        });

      if (error) {
        dbError = error;
        console.error("Supabase Error:", dbError);
      }
    } else {
      console.warn("Supabase not initialized. Skipping database log.");
    }

    // 2. Send email via Resend
    const itemDetails = items.map((item: any) => {
      const specs = item.details ? Object.entries(item.details)
        .filter(([_, v]) => v && v !== "Select")
        .map(([k, v]) => `${k}: ${v}`).join(", ") : "None";
      
      return `- **${item.serviceName}**: ${item.width}x${item.height} ${item.unit} | Area: ${item.area?.toFixed(2)} sq.ft | Rate: ₹${item.estimatedPrice?.toLocaleString('en-IN')} | Specs: [${specs}]`;
    }).join("\n");

    const emailHtml = `
      <div style="font-family: sans-serif; max-width: 600px; margin: auto; border: 1px solid #eee; padding: 20px; border-radius: 10px;">
        <h2 style="color: #111;">New Quote Request</h2>
        <p><strong>Customer:</strong> ${customerDetails.fullName}</p>
        <p><strong>WhatsApp:</strong> ${customerDetails.whatsapp}</p>
        <p><strong>City:</strong> ${customerDetails.city}</p>
        ${customerDetails.businessName ? `<p><strong>Business:</strong> ${customerDetails.businessName}</p>` : ""}
        <p><strong>Urgency:</strong> ${customerDetails.urgency || "Standard"}</p>
        
        <h3 style="border-top: 1px solid #eee; pt: 15px; mt: 20px;">Requested Services</h3>
        <div style="background: #f9f9f9; padding: 15px; border-radius: 8px;">
          ${items.map((item: any) => `
            <div style="margin-bottom: 10px; border-bottom: 1px solid #ddd; padding-bottom: 5px;">
              <strong>${item.serviceName}</strong><br/>
              Size: ${item.width}x${item.height} ${item.unit} | Area: ${item.area?.toFixed(2)} sq.ft<br/>
              Rate: ₹${item.estimatedPrice?.toLocaleString('en-IN')}<br/>
              <em>Specs: ${item.details ? Object.entries(item.details).filter(([_,v])=>v&&v!=="Select").map(([k,v])=>`${k}: ${v}`).join(", ") : "None"}</em>
            </div>
          `).join("")}
        </div>
        
        <p style="font-size: 18px; font-weight: bold; margin-top: 20px;">Total Estimated Rate: ₹${totalEstimatedPrice.toLocaleString('en-IN')}</p>
        <p style="color: #666; font-size: 12px; margin-top: 30px; border-top: 1px solid #eee; padding-top: 10px;">
          Logged at ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
        </p>
      </div>
    `;

    const { data: emailData, error: emailError } = await resend.emails.send({
      from: "Prayas Graphics <onboarding@resend.dev>", // Replace with verified domain if available
      to: "prayasgraphics77@gmail.com", // Prayas Graphics official email
      subject: `New Enquiry from ${customerDetails.fullName} - ₹${totalEstimatedPrice}`,
      html: emailHtml,
    });

    if (emailError) {
      console.error("Resend Email Error:", emailError);
    }

    return NextResponse.json({ 
      success: true, 
      message: "Quote submitted successfully.",
      debug_supabase_null: !supabase,
      debug_db_error: typeof dbError !== 'undefined' ? dbError : null,
      enquiryData: {
        customerName: customerDetails.fullName,
        whatsapp: customerDetails.whatsapp,
        totalRate: totalEstimatedPrice,
        itemsSummary: items.map((i: any) => `${i.serviceName} (${i.width}x${i.height})`).join(", ")
      }
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ success: false, error: error.issues }, { status: 400 });
    }
    console.error("Error submitting quote:", error);
    return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
  }
}
