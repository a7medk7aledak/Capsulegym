import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { firstName, lastName, email, phone, message } = req.body;

    if (!firstName || !lastName || !email || !message) {
      console.log("Missing required fields");
      return res.status(400).json({ message: "Missing required fields" });
    }

    if (!process.env.GMAIL_USER || !process.env.GMAIL_PASS) {
      console.log("Email credentials are not set");
      return res.status(500).json({ message: "Email credentials are not set" });
    }

    console.log("Creating transporter...");
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    console.log("Transporter created successfully.");

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: "capsulegym8@gmail.com",
      subject: "New Contact Form Submission",
      text: `
        First Name: ${firstName}
        Last Name: ${lastName}
        Email: ${email}
        Phone: ${phone}
        Message: ${message}
      `,
    };

    try {
      console.log("Sending email...");
      await transporter.sendMail(mailOptions);
      console.log("Email sent successfully.");
      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      const errorMessage = (error as Error).message || "Unknown error";
      console.error("Error sending email:", errorMessage);
      res.status(500).json({ message: "Error sending email", error: errorMessage });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
};

export default handler;
