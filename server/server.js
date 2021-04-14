const { db } = require("./db");
const PORT = process.env.PORT || 3000;
const app = require("./app");

const init = async () => {
  try {
    await db.sync();
    // start listening (and create a 'server' object representing our server)
    app.listen(PORT, () => console.log(`You are running on port: ${PORT}`));
  } catch (ex) {
    console.log(ex);
  }
};

init();

// const db = require('./db.js');
// // and our server that we already created and used as the previous entry point is 'server.js'
// const app = require('./server');
// const port = process.env.PORT || 3000;

// db.sync()  // sync our database
//   .then(function(){
//     app.listen(port) // then start listening with our express server once we have synced
//   })
