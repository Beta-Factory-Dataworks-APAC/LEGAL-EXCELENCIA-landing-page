import FormData from "form-data";
import Mailgun from "mailgun.js";
import type { NextApiRequest, NextApiResponse } from "next";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("Data", req.body);

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({ username: "api", key: API_KEY });

  const { name, email, message } = req.body;

  const messageData = {
    // from: "Excited User <mailgun@sandbox61dd62287e91418aae8d421864f8fc7a.mailgun.org>",
    from: `legal visitor <${email}>`,
    to: "shaikhparwez963@gmail.com", // Replace with your email
    subject: `New visitor ${name} from Legal Excelencia`,
    html: `
    <html>
        <body>
          <h2>New visitor from Legal Excelencia Website: ${name}</h2>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        </body>
    </html>
    `,
  };

  try {
    const emailRes = await client.messages.create(DOMAIN, messageData);
    console.log(emailRes);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}
