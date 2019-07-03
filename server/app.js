const express = require("express");
const app = express();
const routes = require("./routes/feed");

const bodyParser = require("body-parser");

const port = "3000";
const allowCrosOriginAccess = (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
};

const startServer = () => {
  app.listen(port, (err, resp) => {
    if (err) {
      console.error(`Server error ${err}`);
    } else {
      console.log(`api service running at ${port}`);
    }
  });
};

app.use(allowCrosOriginAccess);
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use("/api", routes);
startServer();

module.exports = app;
