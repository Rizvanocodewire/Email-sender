const express = require("express");
const nodemailer = require("nodemailer");
const path = require("path");
const bodyparser = require("body-parser");
const app = express();

app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.get("/email", function (req, res) {
  res.sendFile(__dirname + "/email.html");
});

// let transporter = nodemailer.createTransport({
//   host: "smtp.gmail.com",
//   port: 587,
//   secure: false,
//   requireTLS: true,
//   auth: {
//     user: "rizwank@ocodewire.com",
//     pass: "MMwAvYGYqFcd",
//   },
// });

// // it is message box which u want to send
// message = {
//   from: "rizwank@ocodewire.com",
//   to: "rizvan3297@gmail.com",
//   subject: "Subject",
//   text: "Hello SMTP Email",
// };
// transporter.sendMail(message, function (err, info) {
//   if (err) {
//     console.log("this is an error", err);
//   } else {
//     console.log(info.response);
//   }
// });

app.post("/send", function (req, res) {
  let name = req.body.name;
  let email = req.body.email;
  let subject = req.body.subject;
  let message = req.body.message;

  console.log(name, email, subject, message);

  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
      user: "rizwank@ocodewire.com",
      pass: "MMwAvYGYqFcd",
    },
  });

  // it is message box which u want to send
  message1 = {
    from: "rizwank@ocodewire.com",
    to: `${email}`,
    subject: `${subject}`,
    message: `${message}`,
    text:
      "Hello" +
      `${name}` +
      "\n" +
      `${subject}` +
      "\nYour Feedback is Important",
  };
  transporter.sendMail(message1, function (err, info) {
    if (err) {
      console.log("this is an error", err);
    } else {
      console.log(info.response);
    }
  });
});

app.listen(9090);
