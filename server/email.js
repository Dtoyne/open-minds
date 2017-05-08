require('dotenv').config();

const api_key         = process.env.MAILGUN_API_KEY;
const domain          = process.env.MAILGUN_DOMAIN;
const mailgun         = require('mailgun-js')({apiKey: api_key, domain: domain});
const list            = mailgun.lists('subscriberlist@example.com');

const data = {
  from: 'Dylan <me@me.com>',
  to: 'dylantoyne@gmail.com',
  subject: 'Testing',
  text: 'Testing, Testing, Testing'
};

list.info((err, data) => {
  // 'data' is mailing list info
  console.log(data);
});

let user = {
  subscribed: true,
  address: 'dylantoyne@gmail.com',
  name: 'Dylan',
  moreInfo: {age: 24}
};

list.members().create(bob, ((err, data) => {
  // 'data is the members details'
  console.log(data);
});

list.members().list((err, members) => {
  console.log(members);
});

list.members('dylan@gmail.com').update({name: 'John' }, (err, body) => {
  console.log(body);
});

mailgun.lists('dylan@gmail.com').members().add({ members: members, subscribed: true }, (err, body) => {
  console.log(body);
});

const sendMail = (id, email) => {
  mailgun.messages().send(data(id, email), (error, body) => {
    if(error) {
      console.log(error)
    }
    console.log(`Sending the email to ${email}. Email content: ${body}`);
  })
};

module.exports = sendMail;
