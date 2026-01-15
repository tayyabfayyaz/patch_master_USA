import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const patchType = formData.get("patchType") as string;
  const width = formData.get("width") as string;
  const height = formData.get("height") as string;
  const colors = formData.get("colors") as string;
  const quantity = formData.get("quantity") as string;
  const requirements = formData.get("requirements") as string;
  const artwork = formData.get("artwork") as File;

  // Configure these environment variables for production:
// SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || "587", 10),
    secure: process.env.SMTP_SECURE === "true", // Use 'true' or 'false' in env
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  // IMPORTANT: This is a test SMTP server. For production, replace with a real SMTP provider.
  const mailOptions = {
    from: `"Patchmaster" <${email}>`,
    to: "matchpasteruas@araish.store",
    subject: "New Quote Request",
    html: `
      <h1>New Quote Request</h1>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Patch Type:</strong> ${patchType}</p>
      <p><strong>Size:</strong> ${width}" x ${height}"</p>
      <p><strong>Colors:</strong> ${colors}</p>
      <p><strong>Quantity:</strong> ${quantity}</p>
      <p><strong>Additional Requirements:</strong> ${requirements}</p>
    `,
    attachments: artwork
      ? [
          {
            filename: artwork.name,
            content: Buffer.from(await artwork.arrayBuffer()),
          },
        ]
      : [],
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json(
      { message: "Quote request sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Failed to send quote request." },
      { status: 500 }
    );
  }
}
