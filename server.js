const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use('/public', express.static(path.join(__dirname, 'static')));

app.listen(port, "0.0.0.0");