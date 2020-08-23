const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const app = express();

app.use(express.static('client/build'));
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(require('./routes'));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/client/build/index.html'));
});

// remove the mongodb string before pushing to github
mongoose.connect(process.env.MONGODB_URI || 'mongodb://heroku_mlsc313k:h4d3cpegkfikoq5j84pnjc47o@ds049888.mlab.com:49888/heroku_mlsc313k');

const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log('Express server listening on port ' + port + '.');
});
