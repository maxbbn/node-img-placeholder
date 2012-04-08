## descript
this is and connect/express middleware for generate a placeholder image.

## install
npm install img-placeholder

## use

### within Express

````javascript
var express = require('express');

var app = express.createServer();

app.use(require('img-placeholder')(config));

app.listen(3000);

````

Then you can use http://127.0.0.1/genimg/100x100.png for the placeholder img of you demo project.

## Configs
