
const express = require("express");
const path = require("path");
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static('public'));

app.listen(PORT, () => 
    console.log(`app listening at http://localhost:${PORT}`)
);