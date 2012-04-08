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

## License
(The MIT License)

Copyright (c) 2010 maxbbn <qipbbn@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
