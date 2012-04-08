var Canvas = require('canvas'),
    defaultConfig = {
        maxWidth : 8000,
        maxHeight : 8000,
        backgroundStyle : '#CCC',
        textStyle : '#FFF',
        fontFamily : 'Impact',
        fontSizeParam : 5
    },
    exts = ['png','jpg', 'jpeg'];

/**
 * Generate image for placeholder use
 * url /genimg/400x300.png
 * url /genimg/400x300.jpg
 */
module.exports = function (config) {

    config = config || {};

    for(k in defaultConfig) {
        if (!(k in config)) {
            config[k] = defaultConfig[k];
        }
    }

    return function (req, res, next) {
        var regx = /^\/genimg\/(\d+)x(\d+)\.(.+)$/,
            match = req.url.match(regx),
            width,
            height,
            fontSize,
            ext,
            canvas,
            stream;
        if (!match) {
            return next();
        }

        width = parseInt(match[1], 10);
        height = parseInt(match[2], 10);

        ext = match[3].toLowerCase();

        if(width < 0 || width > config.maxWidth || height < 0 || height > config.maxHeight){
            throw new Error('genimage: Size out of range');
            return;
        }

        if(exts.indexOf(ext) === -1) {
            throw new Error('genimage: Extension not support');
            return;
        }

        canvas = new Canvas(width, height);
        ctx = canvas.getContext('2d');
        fontSize = Math.round(Math.min(width/config.fontSizeParam,height));

        ctx.save();
        ctx.fillStyle = config.backgroundStyle;
        ctx.fillRect(0, 0, width, height);
        ctx.restore();

        ctx.save();
        ctx.font = fontSize + 'px ' + config.fontFamily;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = config.textStyle;
        ctx.fillText(width + '×' + height, width / 2, height / 2 - fontSize * 0.1);
        ctx.restore();

        if (ext === 'png') {
            res.header('Content-Type','image/png');
            stream = canvas.createPNGStream();
        } else {
            res.header('Content-Type','image/jpeg');
            stream = canvas.createJPEGStream()
        }

        stream.pipe(res, function (err) {
            if (err) {
                next(err);
                return;
            }
            res.end();
        });
    };
};
