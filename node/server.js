const express = require("express");
const port = 8080;
const path = require('path');
const bodyParser = require('body-parser');
var methodOverride = require('method-override');
var app = express()

app.use(bodyParser.json()); // стандартный модуль, для парсинга JSON в запросах
app.use(methodOverride('X-HTTP-Method-Override')); // поддержка put и delete
app.use(express.static(path.join(__dirname, "public"))); // запуск статического файлового сервера, который смотрит на папку public/ (в нашем случае отдает index.html)

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Token");
  next();
});

app.get('/tasks/all', function (req, res) {
  console.log(req.headers)
  res.send('API is running');
});
app.post('/ddt_incoming/create', function(req, res) {
  console.log(req.body)
  res.status(200);
});

app.listen(8080, function(){
    console.log('Express server listening on ' + port +' port')
})
