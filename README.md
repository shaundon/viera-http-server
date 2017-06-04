# Viera HTTP server

Very lightweight HTTP server to wrap [viera-api](https://www.npmjs.com/package/viera-api).

# Set up

Make a copy of `config.example.json` named `config.json` and put
the IP address of your TV in there.

Run `npm install` to install dependencies.

Run `npm start` to start the server.

# Usage

Some samples with curl:

```
curl http://localhost:5000?command=power
curl http://localhost:5000?command=netflix
```

..you get the idea.
