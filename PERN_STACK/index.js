const express = require("express");
// const { Client } = require("pg");

const routes = require("./routes/routes");
const app = express();
// const Router = express.Router();
app.use(express.json());

// const client = new Client({
//   user: "postgres",
//   password: "root",
//   host: "localhost",
//   port: 5432,
//   database: "postgres",
// });

// client
//   .connect()
//   .then(() => {
//     console.log("connected");
//   })
//   .catch((err) => {
//     console.log("err=>", err);
//   });
//   .finally(() => {
//     client.end();
//   });

app.use("/api", routes);

app.listen(5000, () => {
  console.log(`App is listening the port: 5000.`);
});
// module.exports = client;
// module.exports = app;
