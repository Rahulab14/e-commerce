const express = require('express');
const app = express();
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config({ path: 'backend/config/.env' });
}
require('dotenv').config({payh:'backend/config/.env'});
module.exports = app;