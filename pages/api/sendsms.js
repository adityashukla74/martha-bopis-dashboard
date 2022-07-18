const client = require("twilio")(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

const sendmessage = async (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");

  client.messages
    .create({
      from: process.env.TWILIO_FROM_PHONE_NUMBER,
      to: process.env.TWILIO_TO_CUSTOMER,
      body: req.body.body,
    })
    .then(() => {
      res.send(JSON.stringify({ success: true }));
    })
    .catch((err) => {
      console.log(err);
      res.send(JSON.stringify({ success: false }));
    });
};

export default sendmessage;