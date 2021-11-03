const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../until/mongoose');
//class NewController 
 class SiteController {
    index(req,res, next){
        Course.find({}).lean()
        .then(courses =>res.render('home', {
            courses: (courses)}))   
        .catch(next);
    }

    // get : new: slug
    search(req, res) { 
        res.render('search');
    }
}
module.exports = new SiteController;
