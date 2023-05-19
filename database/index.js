const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express();

const dbUrl = 'mongodb://127.0.0.1:27017/steelAndScreams';

mongoose.connect(dbUrl)
    .then(() => {
        app.listen(3030, () => console.log('App is listening on port 3000...'))
    })
    .catch(() => {
        console.error("App can't connect to database.")
    })