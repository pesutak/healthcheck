# Healthcheck

[![npm](https://img.shields.io/npm/v/@xclbr/healthcheck?style=flat-squere)](https://www.npmjs.com/package/@xclbr/healthcheck)

This package contains whole Healthcheck server based on Express and Express middleware which can be used in your application. After deploing you can reach health endpoint at: 

```
http://your-server-name/healthz
```
Sample return is HTTP Status Code 200 and:
```json
{"status":"OK","uptime":14.8367612}
```
If you deploy it on non-express application, you can specify listening port via environmet variable `HEALTHCHECK_PORT` or directly in `Healthcheck.Run` method.



## Usage

in Express application

```js
const express = require('express');
const Healthcheck = require('@xclbr/healthcheck');

const app = express();
app.use(Healthcheck.handler);
```

in non-express application

```js
const Healthcheck  = require('@xclbr/healthcheck');

Healthcheck.Run(); //default port 80
```
