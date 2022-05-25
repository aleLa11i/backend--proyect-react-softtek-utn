const express = require("express");
const dotenv = require("dotenv").config();
const { PORT } = process.env;
const cors = require("cors");
const Auth = require("./routes/auth");
const Posts = require("./routes/posts");
const app = express();
const morgan = require('morgan');
const serverless = require('serverless-http');
const { DBconnect } = require("./db/config");

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});
app.use(cors());

app.use(morgan('tiny'));
app.use("/.netlify/functions/api/auth", Auth);
app.use("/.netlify/functions/api/posts", Posts);


DBconnect();

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});

module.exports.handler = serverless(app);
