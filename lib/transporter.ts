// 导入nodemailer模块
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.qq.com",
  port: 465,
  secure: true,
  debug: true,
  auth: {
    user: process.env.QQ_USER,
    pass: process.env.QQ_PASS,
  },
  logger: true,
});

export default transporter;
