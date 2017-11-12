const app = require('express')();
const bodyParser = require('body-parser');
const upload = require('multer')({dest: 'uploads'});

app.use(bodyParser.urlencoded({extend: false}));
app.use(bodyParser.json());

app.get('/', (req, res) => res.sendStatus(200));

module.exports = app;