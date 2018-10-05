const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const methodOverride = require('method-override');

const environment = process.env.NODE_ENV || 'development';
const portOptions = {development: 3000, test: 6000};
const defaultPort = portOptions[environment];
const port = process.env.PORT || defaultPort;

const knexPath = path.join(__dirname, 'knexfile.js');
const app = express();
const knex = require('./db/knex');
const showdown = require('showdown');
// app.use(showdown);
app.disable('x-powered-by');

app.use(methodOverride('_method'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join('public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs');

const login = require('./routes/user_route');
app.use(login);
const quiz = require('./routes/quiz_route')
app.use(quiz);


app.get('/', (req, res) => {
    res.render('index');
});

app.use((req, res) => {
    res.sendStatus(404);
});

app.listen(port, () => {
    console.log(`Listening on PORT ${port}`);
});

module.exports = app;