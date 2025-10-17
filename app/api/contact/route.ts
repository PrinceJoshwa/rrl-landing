import nodemailer from "nodemailer"

interface ContactFormData {
  name: string
  contact: string
  property: string
  message: string
}

export async function POST(req: Request) {
  try {
    const { name, contact, property, message }: ContactFormData = await req.json()

    const transporter = nodemailer.createTransport({
      host: "mail.rrlbuildersanddevelopers.com",
      port: 465,
      secure: true,
      auth: {
        user: "enquiry@rrlbuildersanddevelopers.com",
        pass: "Rrlbndadmin@123",
      },
    })

    await transporter.sendMail({
      from: `"${name}" <enquiry@rrlbuildersanddevelopers.com>`,
      to: "enquiry@rrlbuildersanddevelopers.com",
      subject: `New Enquiry from ${name}`,
      html: `
        <h3>New Enquiry Details</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Contact:</b> ${contact}</p>
        <p><b>Interested Property:</b> ${property}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    })

    return new Response(JSON.stringify({ success: true }), { status: 200 })
  } catch (error: any) {
    console.error("Error sending email:", error)
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 })
  }
}
