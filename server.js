require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const dbConfig = require("./config/db.config");

mongoose.Promise = global.Promise;
mongoose
  .connect(dbConfig.db, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(
    () => {
      console.log("Database connected");
    },
    (error) => {
      console.log("Database could not be connected : " + error);
    }
  );

const app = express();

app.use(express.json());
app.use(cors());

const employeeRouter = require("./routes/employee.routes");
app.use("/api", employeeRouter);

PORT = 8080;

app.listen(PORT, () => console.log(`Server up and running at port ${PORT}`));
