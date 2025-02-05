"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { sendEmail } from "@/app/actions/send-email"
import { ContactFormSchema, ContactFormData } from "@/lib/schemas"
import { useToast } from "@/hooks/use-toast"
import { BlurFade } from "@/components/ui/blur-fade"



export default function ContactForm() {
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({})
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [success, setSuccess] = useState(false)
  const { toast } = useToast()

  async function handleSubmit(formData: FormData) {
    setErrors({})
    setSuccess(false)

    // Client-side validation
    const validationResult = ContactFormSchema.safeParse({
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    })

    if (!validationResult.success) {
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {}
      validationResult.error.issues.forEach((issue) => {
        const field = issue.path[0] as keyof ContactFormData
        fieldErrors[field] = issue.message
      })
      setErrors(fieldErrors)
      return
    }

    // If validation passes, send the email
    const result = await sendEmail(formData)

    if (!result.success) {
      toast({
        title: "Error",
        description: result.error || "Failed to send message. Please try again.",
        variant: "destructive",
      })
      return
    }

    toast({
      title: "Success",
      description: "Your message has been sent successfully!",
    })
    ;(document.getElementById("contact-form") as HTMLFormElement).reset()
  }

  return (
    <div className="mb-32">
    <BlurFade delay={0}>
    <h2 className="px-6 font-bold text-4xl dark:text-white">Contact</h2>
    </BlurFade>



    <form id="contact-form" action={handleSubmit} className="space-y-6 p-6 max-w-2xl">
      <div className="space-y-2">
      <BlurFade delay={0.25}>
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          name="name"
          required
          placeholder="Your name"
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name && (
          <p className="text-destructive text-sm" id="name-error">
            {errors.name}
          </p>
        )}
      </BlurFade>
      </div>

      <div className="space-y-2">
      <BlurFade delay={0.25}>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          placeholder="your-email@email.com"
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && (
          <p className="text-destructive text-sm" id="email-error">
            {errors.email}
          </p>
        )}
      </BlurFade>
      </div>

      <div className="space-y-2">
      <BlurFade delay={0.25}>
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          required
          placeholder="Your message..."
          className="min-h-[120px]"
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p className="text-destructive text-sm" id="message-error">
            {errors.message}
          </p>
        )}
      </BlurFade>
      </div>

      <div className="space-y-4">
        <BlurFade delay={0.25}>
        <Button type="submit" className="w-full">Send</Button>
        </BlurFade>
      </div>
    </form>
    </div>

  )
}

