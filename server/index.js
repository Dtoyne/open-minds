require('dotenv').config();

const express       = require('express');
const app           = express();
const bodyParser    = require('body-parser');
const PORT          = 8080;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', { title: 'index' });
});

app.get('/login', (req, res) => {
  res.render('login)', { title: 'login'});
});

//PassportJS Authentication Examples:

app.post('/login', passport.authenticate('local', { successRedirect: '/',
                                                    failureRedirect: '/login' }
));

app.post('/login',
  passport.authenticate('local'),
  function(req, res) {
    // If this function gets called, authentication was successful;
    // 'req.user' contains the authenticated user;
    res.redirect('/users/' + req.user.username);
  });



/*

Routes likely not needed for SPA:

app.get('/speakers', (req, res) => {
  res.render('speakers', { title: 'speakers' });
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'about' });
});

app.get('/speakerseries', (req, res) => {
  res.render('speakerseries', { title: 'speakerseries' });
});

app.get('/contact', (req, res) => {
  res.render('contact', { title: 'contact' });
});

app.get('/workshops', (req, res) => {
  res.render('workshops', { title: 'workshops' });
});

app.get('/archive', (req, res) => {
  res.render('archive', { title: 'archive' });
});

*/

app.post('/', (req, res) => {
  if (!req.body) {
    res.status(400).json({ error: 'Invalid Request: No input provided'});
  } else {
    console.log('Submission Successful');
  }
});

app.use((req, res) => res.status(404).send(`Error 404. This path does not exist.`));

app.listen(8080, () => console.log(`Listening on port ${PORT}`));
