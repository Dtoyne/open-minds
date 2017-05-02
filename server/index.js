const express = require('express');
const app = express();
const PORT = 8080;

app.get('/', function(req, res) {
  res.send('Open Minds');
});

app.listen(8080, () => console.log(`Listening on port ${PORT}`));
