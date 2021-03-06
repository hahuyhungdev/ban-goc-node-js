const path = require("path");
const express = require("express");
const handlebars = require("express-handlebars");
const morgan = require("morgan");
const e = require("express");
const app = express();
const port = 3000;
//http logger
app.use(express.static(path.join(__dirname,'public')));
app.use(morgan("combined"));

    //template
    app.engine(
      "hbs",
      handlebars({
        extname: ".hbs",
      })
    );
 
    app.set("view engine", "hbs");
    app.set("views", path.join(__dirname, "resources\\views"));

    app.get("/", (req, res) => {
      res.render("home");
    });
    app.get("/new", (req, res) => {
      res.render("new");
    });
   
  
    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
