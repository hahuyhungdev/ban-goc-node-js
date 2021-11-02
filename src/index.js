const path = require("path");
const express = require("express");
const handlebars = require("express-handlebars");
const morgan = require("morgan");
const e = require("express");
const app = express();
const port = 3000;

const route = require("./routes");
const db = require("./config/db");

//connect to db
db.connect();
//http logger
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());
// app.use(morgan("combined"));

    //template
    app.engine(
      "hbs",
      handlebars({
        extname: ".hbs",
      })
    );
 
    app.set("view engine", "hbs");
    app.set("views", path.join(__dirname, "resources", "views"));

    //route init 
    route(app);


    app.listen(port, () => {
      console.log(`app listening at http://localhost:${port}`);
    });
