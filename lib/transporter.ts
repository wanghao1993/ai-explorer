import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "qq",
  host: "smtp.qq.com",
  port: 465,
  secure: true,
  debug: true,
  auth: {
    user: process.env.QQ_USER,
    pass: process.env.QQ_PASS,
  },
});

export default transporter;
