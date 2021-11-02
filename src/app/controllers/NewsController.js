//class NewController 
 class NewsController {
    index(req, res) {
        res.render('news');
    }
    // get : new: slug
    show (req, res) { 
       res.send('show');
    }
}
module.exports = new NewsController();

