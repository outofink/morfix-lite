var express = require('express');
var path = require('path');
var request = require('request');
var cheerio = require('cheerio');
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
    url = 'http://www.morfix.co.il/' + encodeURI(req.body.search);

    request(url, function(error, response, html) {
        if (!error) {
            var $ = cheerio.load(html);
            var json = [];
            var word = [];
            var diber = [];
            var translation = [];

            $('.word').each(function(i, elem) {
                var data = $(this);
                word[i] = data.text();
            })
            $('.diber').each(function(i, elem) {
                var data = $(this);
                var j = i.toString()
                diber[i] = data.text();
            })
            $('.translation').each(function(i, elem) {
                var data = $(this);
                var j = i.toString()
                translation[i] = data.children().first().text();
                if (translation[i].trim() == "") {
                	translation[i] = data.text().trim();
                }
                translation[i] = translation[i].split("; ");
            })
            translation = translation.filter(String)
            for (i = 0; i < word.length; i++) {
                json[i] = {
                    "word": word[i],
                    "diber": diber[i],
                    "translation": translation[i]
                }
            }
        }
        res.render('main', {
        	title: req.body.search,
            data: json
        });
    });
});

app.listen(process.env.PORT || 3000);