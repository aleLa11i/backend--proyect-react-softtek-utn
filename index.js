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

app.use( express.static("public") );
app.use( express.json() );
app.use(cors());

app.use(morgan('tiny'));

app.use("/api/auth", Auth);
app.use("/api/posts", Posts);


DBconnect();

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});

