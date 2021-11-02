const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../until/mongooes');
//class NewController 
 class SiteController {
    index(req,res, next){
        Course.find({})
        .then(courses =>res.render('home', {
            courses: mutipleMongooseToObject(courses)}))   
        .catch(next);
    }

    // get : new: slug
    search(req, res) { 
        res.render('search');
    }
}
module.exports = new SiteController;
