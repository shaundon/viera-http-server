const Viera = require('viera-api');
const express = require('express');

const {ip} = require('./config.json');

const app = express();

app.get('/', (req, res) => {
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
