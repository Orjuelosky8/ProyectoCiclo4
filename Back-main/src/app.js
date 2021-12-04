const express = require('express');
const cors = require('cors');

const app = express();

// settings
app.set('port', process.env.PORT || 4000);

// middlewares 
app.use(cors());
app.use(express.json());

// routes
app.use('/api/notes', require('./routes/notes'));
app.use('/api/users', require('./routes/users'));
app.use('/api/registrar', require('./routes/registrations'));
app.use('/api/ingresar', require('./routes/registration'));
//app.use('/api/logout', require('./routes/logout'));

module.exports = app;
