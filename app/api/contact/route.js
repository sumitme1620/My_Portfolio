// import { NextResponse } from "next/server";

// export async function POST(req) {
//   try {
//     const formData = await req.formData();
//    console.log("Name:", formData.get("name"));

//     formData.append("access_key", process.env.WEB3FORMS_ACCESS_KEY); // secure access

//     const response = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       body: formData,
//     });

//     const data = await response.json();

//     return NextResponse.json(data);
//   } catch (error) {
//     console.error("API Route Error:", error);
//     return NextResponse.json(
//       { success: false, message: "Something went wrong." },
//       { status: 500 }
//     );
//   }
// }

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER, // your Gmail address
        pass: process.env.MAIL_PASS, // your Gmail app password
      },
    });

    // Send the email
    await transporter.sendMail({
      from: `"${name}" <${email}>`, // sender name and email
      to: process.env.MAIL_USER, // your email where you want to receive messages
      subject: "New Contact Form Submission",
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Form Submitted Successfully",
    });
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send email." },
      { status: 500 }
    );
  }
}
