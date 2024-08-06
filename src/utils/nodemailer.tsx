import nodemailer, { Transporter } from "nodemailer";
import SMPTransport from "nodemailer-smtp-transport";

import dotenv from "dotenv";
dotenv.config();

export const smtpEmail = process.env.GOOGLE_EMAIL || "";
export const smtpPassword = process.env.GOOGLE_PASSWORD || "";

console.log(process.env.GOOGLE_EMAIL);
console.log(process.env.GOOGLE_PASSWORD);
export const transporter: Transporter = nodemailer.createTransport(
  SMPTransport({
    service: "Gmail",
    secure: false,
    auth: {
      user: smtpEmail!,
      pass: smtpPassword!,
    },
  })
);
