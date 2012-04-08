## descript
this is and connect/express middleware for generate a placeholder image.

## install
````sh
npm install img-placeholder
````

## use

### within Express

````javascript
var express = require('express');
var imagePlaceholder = require('img-placeholder');

var app = express.createServer();

app.use(imagePlaceholder());

app.listen(3000);

````

Then you can use http://127.0.0.1/genimg/100x100.png for the placeholder img of you demo project.

## Configs

you can also do some personalization;

````javascript

app.use(imgPlaceholder({
    maxWidth : 10000,
    maxHeight : 10000,
    backgroundStyle : '#333',
    textStyle : '#FFF'
}));
````

### maxWidth {Number}
the maximum Width;

default: *8000*

### maxHeight {Number}
the maximum Height;

default: *8000*

### backgroundStyle {String}
The backgrond color

default: *'#CCC'*

### textStyle {String}
The color of text

default: *'#FFF'*

### fontFamily {String}
the font fo text

default: *'Impact'*

### fontSizeParam {Number}
param to control the font-size

default: *5*
