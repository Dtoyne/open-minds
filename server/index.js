// require('dotenv').config();

const express       = require('express');
const app           = express();
const bodyParser    = require('body-parser');
const PORT          = 8080;

// app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('/main');
});

// app.post('/', (req, res) => {
//   if (!req.body) {
//     res.status(400).json({ error: 'Invalid Request: No input provided'});
//   } else {
//     console.log('Submission Successful');
//   }
// });

// app.use((req, res) => res.status(404).send(`Error 404. This path does not exist.`));

app.listen(8080, () => console.log(`Listening on port ${PORT}`));
