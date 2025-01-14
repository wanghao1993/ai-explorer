import transporter from "./mail";

const mailOptions = {
  from: "whao53333@gmail.com",
  to: "2682265436@qq.com",
  subject: "Hello from Nodemailer",
  text: "This is a test email sent using Nodemailer.",
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error("Error sending email: ", error);
  } else {
    console.log("Email sent: ", info.response);
  }
});
