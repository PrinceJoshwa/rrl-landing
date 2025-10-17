import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
  try {
    const { name, contact, property, message } = await req.json()

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
      subject: "New Call Back Request",
      html: `
        <h3>New Call Back Request</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Contact Number:</strong> ${contact}</p>
        <p><strong>Interested Property:</strong> ${property}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    })

    return NextResponse.json({ success: true, message: "Email sent successfully" })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ success: false, message: "Failed to send email" }, { status: 500 })
  }
}
