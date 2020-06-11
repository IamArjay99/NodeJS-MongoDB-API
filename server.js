const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// Middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const PORT = process.env.PORT || 3000;

const usersController = require("./controller/usersController");

app.use("/users", usersController);

app.listen(PORT, () => {
  console.log("Server started at port " + PORT);
});
