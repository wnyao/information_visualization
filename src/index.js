const express = require("express");
const exphbs = require("express-handlebars");
const app = express();
const PORT = 3000;

const path = require("path");
const home = require("./routes/home");

// public path
app.use("/", express.static(path.join(__dirname, "../src/views")));

// template engine config
app.engine(
  "handlebars",
  exphbs({
    layoutsDir: path.join(__dirname, "views", "layouts"),
    partialsDir: path.join(__dirname, "views", "partials"),
    defaultLayout: "main",
  })
);
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));

// routes
app.use("/", home);

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));