import { NextResponse } from 'next/server'
import { Resend } from 'resend'
 
const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const { name, email, message } = await req.json()

  try {
    const data = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // You can use your verified sender
      to: ['asaditya012345@gmail.com'], // Change to your destination email
      subject: `Portfolio Contact: ${name}`,
      replyTo: email,
      text: `From: ${name} <${email}>\n\n${message}`,
    })
    return NextResponse.json({ success: true, data })
  } catch (error) {
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 })
  }
}
