"use server"

import { Resend } from "resend"
import { ContactFormSchema } from "@/lib/schemas"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail(formData: FormData) {
  // Validate form data
  const validatedFields = ContactFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  })

  // Return early if validation fails
  if (!validatedFields.success) {
    return {
      success: false,
      error: validatedFields.error.issues[0].message,
    }
  }

  const { name, email, message } = validatedFields.data

  try {
    console.log("Attempting to send email...")
    const { data, error } = await resend.emails.send({
      from: "Your Portfolio <onboarding@resend.dev>", // Update this
      to: ["aj@gervaisunplugged.com"], // Replace with your email
      subject: `New message from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
    })

    if (error) {
      console.error("Resend API error:", error)
      return { success: false, error: error.message }
    }

    console.log("Email sent successfully:", data)
    return { success: true, data }
  } catch (error) {
    console.error("Failed to send email:", error)
    return { success: false, error: "Failed to send email. Please try again." }
  }
}

