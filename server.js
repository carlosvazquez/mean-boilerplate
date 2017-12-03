const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const index = require('./routes/index');
const tasks = require('./routes/tasks');
const port = 3000;
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Set static folder
app.engine('html', require('ejs').renderFile);
app.use(express.static(path.join(__dirname, 'client')));

// Body parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', index);
app.use('/api/v1', tasks);
app.listen(port, ()=> console.log('Server running on port ' + port));
