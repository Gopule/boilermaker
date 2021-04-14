const express = require("express");
const app = express();
const morgan = require("morgan");
const path = require("path");

app.use(morgan("dev")); //logging middleware
// app.use(require('method-override')('_method'));
app.use(express.static(path.join(__dirname, "../public"))); //serving up static files (e.g. css files)
app.use(express.urlencoded({ extended: false })); //parsing middleware for form input data
app.use(express.json());

// app.use("/wiki", require("./routes/wiki")); //mounting

// app.get("/", function (req, res) { // redirecting
//   res.redirect("/wiki/");
// });

app.use((req, res) => {
  res.status(404).send("notFound");
});

app.get("*", function (req, res, next) {
  // informational messages to frontend
  res.sendFile(path.join(__dirname, "../client"));
});

app.use(function (err, req, res, next) {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error.");
});

module.exports = app;
