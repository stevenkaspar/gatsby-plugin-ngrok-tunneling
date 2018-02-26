# gatsby-plugin-ngrok-tunneling

Sets up tunneling using [ngrok](https://www.npmjs.com/package/ngrok)

Only used in `development` or if `process.env.TUNNELING === 'true'` (disable with `process.env.TUNNELING === 'false'`)

## Install

```
npm install --save gatsby-plugin-ngrok-tunneling
```

## How to use

```
plugins: [ 'gatsby-plugin-ngrok-tunneling' ]
```

## Overriding Options

You can override the default **ngrok** options config

> [ngrok npm](https://www.npmjs.com/package/ngrok)

```
{
  proto: 'http',      // http|tcp|tls
  addr: 8080,         // port or network address
  auth: 'user:pwd',   // http basic authentication for tunnel
  subdomain: 'alex',  // reserved tunnel name https://alex.ngrok.io
  authtoken: '12345', // your authtoken from ngrok.com
  region: 'us'        // one of ngrok regions (us, eu, au, ap), defaults to us,
  configPath: '~/git/project/ngrok.yml'                      // custom path for ngrok config file
  binPathReplacer: ['app.asar/bin', 'app.asar.unpacked/bin'] // custom path replacement when using for production in electron
}
```
