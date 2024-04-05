const express = require("express");
const app = express();
const taskRouter = require("./routes/tasks");
const connectDB = require("./db/connect");
const notFound = require("./middleware/not-found")
require('dotenv').config()
const errorHandlerMiddleware = require('./middleware/error')
app.use(express.json())
app.use(express.static("public"));



app.use("/api/v1/tasks", taskRouter);
app.use(notFound)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 5000

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);

    app.listen(port, () => {
      console.log(`Application listening on the port ${port}.....`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();


