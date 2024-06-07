const express = require('express');
const app = express();
const db = require('./database');
const path = require('path')
const cors = require('cors');
require("dotenv").config();

app.use(cors({
  origin: "http://localhost:5173"
}))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
    db();
  });
