require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("./config/db.config");
db();

const app = express();

app.use(express.json());
app.use(cors());

app.listen(Number(process.env.PORT), () =>
  console.log(`Server up and running at port ${process.env.PORT}`)
);
