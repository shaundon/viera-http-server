const Viera = require('viera-api');
const express = require('express');
const authentication = require('express-authentication');

const {ip, apiKey} = require('./config.json');

const app = express();

app.use((req, res, next) => {
  // Get auth data.
  req.challenge = req.get('Authorization');
  req.authenticated = req.challenge === apiKey;
  if (req.authenticated) {
      req.authentication = { user: 'Hello' };
  } else {
      req.authentication = 'INVALID_API_KEY';
  }
  next();
});

app.get('/', authentication.required(), (req, res) => {

  const command = req.query.command || '';
  if (!command) {
    res.status(400).send(`Provide a command query parameter.`);
    return;
  }
  console.log(`Received request.`, command);
  Viera(ip, command).then(
    (success) => res.sendStatus(200),
    (error) => res.status(500).send(error)
  );
});

const port = process.env.port || 5000;
app.listen(port, () => console.log(`Viera HTTP server running on ${port}`));
