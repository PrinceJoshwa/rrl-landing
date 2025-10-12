import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
  try {
    const { name, email, phone } = await req.json()

    // ✅ configure SMTP using your cPanel credentials
    const transporter = nodemailer.createTransport({
      host: "mail.rrlbuildersanddevelopers.com",
      port: 465, 
      secure: true, 
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    // ✅ prepare the email
    const mailOptions = {
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      to: "enquiry@rrlbuildersanddevelopers.com", // where you want to receive it
      subject: "New Brochure Download Request",
      html: `
        <h3>New Brochure Request</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
      `,
    }

    // ✅ send email
    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true, message: "Email sent successfully" })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ success: false, message: "Failed to send email" }, { status: 500 })
  }
}
