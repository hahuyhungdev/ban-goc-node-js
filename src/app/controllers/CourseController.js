const Course = require('../models/Course');
const { mongooseToObject } = require('../../until/mongoose');
//class NewController 
class CourseController {
    // show findOne of Course
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug }).lean()
            .then(course => 
                res.render('courses/show',{ course })
            )
            .catch(next);
        }
}
module.exports = new CourseController();



