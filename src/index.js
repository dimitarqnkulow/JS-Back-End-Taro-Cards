const express = require("express");
const expressConfig = require("./config/expressConfig");
const handlebarsConfig = require("./config/handlebarsConfig");

const app = express();
const PORT = 5000;

expressConfig(app);
handlebarsConfig(app);

app.listen(5000, console.log(`Server is listening on port ${PORT}...`));
