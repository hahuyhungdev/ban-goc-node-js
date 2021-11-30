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
    app.get("/intro", (req, res) => {
      res.render("intro");
    });
    app.get("/news", (req, res) => {
      res.render("news");
    });
    app.get("/contact", (req, res) => {
      res.render("contact");
    });
    app.get("/product", (req, res) => {
      res.render("product");
    });
   
  
    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
//3 là xóa hết rồi mình ghi đại 1 dòng h1 thôi. xong xác định đầu cuối
//oke rồi thì mình sẽ tiến hành copy paste lại. trong trường hợp thấy css có thiếu thì em vô thằng home.hbs bổ sung thằng css vô thôi. còn cái mà asset thì a dạy em rồi. vd như asset/css/ thì muốn thay hết thành /css. mình ctrl H xong thay asset/ = /   biến đổi nguyên cả chuỗi thành 1 dấu / là oke okk a