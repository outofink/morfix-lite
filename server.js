var express = require('express');
var path = require('path');
var request = require('request');
var bodyParser = require('body-parser');

var app = express()

app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(bodyParser.json())

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, './public')));

app.get('/', function(req, res) {
    res.render('home');
});

app.post('/', function(req, res) {

    word = req.body.search
    bodyjson = `{"Query":"${word}","ClientName":"Android_Hebrew"}`

    lengthInUtf8Bytes = (str) => {
        var m = encodeURIComponent(str).match(/%[89ABab]/g);
        return str.length + (m ? m.length : 0);
    }
      
    contentLength = lengthInUtf8Bytes(bodyjson)

    request({
            method: 'POST',
            uri: "http://services.morfix.com/translationhebrew/TranslationService/GetTranslation/",
            headers: {
                "Accept": "application/json",
                "Content-type": "application/json",
                "Content-Length": contentLength,
                "Host": "services.morfix.com",
                "Connection": "Keep-Alive"
            },
            body: bodyjson
        },
        (error, response, body) => {
            output = JSON.parse(body)
            json = []
            for (i = 0; i < output.Words.length; i++) {
                translation = []
                output.Words[i].OutputLanguageMeanings.forEach(function(definitions) {
                    translation.push(definitions[0].DisplayText)
                })
                json[i] = {
                    "word": output.Words[i].InputLanguageMeanings[0][0].DisplayText,
                    "diber": output.Words[i].PartOfSpeech,
                    "translation": translation
                }
            };
            res.render('main', {
                title: req.body.search,
                data: json
            });
        });
    });

app.listen(process.env.PORT || 3000);
