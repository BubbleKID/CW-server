const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const port = process.env.PORT || 3000;
const app = express();

function dbConnection() {
  const username = encodeURIComponent("marksama");
  const password = encodeURIComponent("eLZ2EOSUG4yBfGhh");
  const connectionString = `mongodb+srv://${username}:${password}@cluster0.qpmztq7.mongodb.net/?retryWrites=true&w=majority`;
  mongoose.connect(connectionString);
  const db = mongoose.connection;

  db.on("connected", () => {
    console.log("DB connected");
    return mongoose;
  });

  db.on("error", error => {
    console.log(error.message);
    process.exit(1);
    return error;
  });

  db.on("disconnected", () => {
    console.log("mongodb connection disconnected");
    return "disconnected";
  });
};

app.use(cors());
dbConnection();

app.listen(port, () => {
  console.log(`server running in ${port}`);
});
