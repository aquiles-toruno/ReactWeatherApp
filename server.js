var express = require('express');
var open = require('open');
var fs = require('fs');
var _ = require('underscore');

const browsers = ['chrome', 'firefox', 'opera']

var app = express();
const PORT = process.env.PORT;

app.use(function (req, res, next) {
    if (req.header['x-forwarded-proto'] === 'https') {
        res.redirect('http://' + req.hostname + req.url)
    } else {
        next();
    }
})

app.use(express.static(__dirname + '/public'));

var router = express.Router();

router.get("/GetPais/:nombre", (req, res) => {
    var nombrePais = req.params.nombre;
    readJSONFile('./city.list.json', (err, json) => {
        if (err) {
            res.send(err);
        }
        var filtrado = _.filter(json, (pais) => {
            return pais
                .name
                .toUpperCase()
                .indexOf(nombrePais.toUpperCase()) != -1;
        });
        res.json(filtrado);
    });
});

app.use('/api', router)

app.listen(PORT, function () {
    console.log('Express server is running on port ' + PORT);

    if (PORT === 5000) {
        var browser = browsers[0];
        open('http://localhost:5000', browser);
        console.log('Opening ' + browser);
    }
});

var readJSONFile = (filename, callback) => {
    fs
        .readFile(filename, function (err, data) {
            if (err) {
                callback(err);
                return;
            }
            try {
                callback(null, JSON.parse(data));
            } catch (exception) {
                callback(exception);
            }
        });
}