# Viera HTTP server

Very lightweight HTTP server to wrap [viera-api](https://www.npmjs.com/package/viera-api).

## Set up

Make a copy of `config.example.json` named `config.json` and put
the IP address of your TV in there.

Run `npm install` to install dependencies.

Run `npm start` to start the server.

## Usage

Some samples with curl:

```
curl http://localhost:5000?command=power
curl http://localhost:5000?command=netflix
```

..you get the idea.

## Running on a server

Currently I have a Raspberry Pi to run this app. I tried using systemd but couldn't get on with it, so I'm now trying [forever](https://www.npmjs.com/package/forever).

So, to start the app running in forever, run `npm run start-bkgrnd`. Run `npm run stop-bkgrnd` to stop it.

To abstract this into a command that runs whenever the server starts, you can use Crontab:

@reboot /usr/bin/npm run start-bkgrnd --prefix ~/code/viera-http-server
