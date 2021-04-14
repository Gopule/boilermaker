const db = require("./db");

const User = require("./models/users.js");

//associations could go here!

module.exports = {
  db,
  models: {
    User,
  },
};
