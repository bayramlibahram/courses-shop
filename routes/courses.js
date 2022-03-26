const {Router} = require("express");
const router = Router();
const Course = require('../models/course');

router.get('/', async (req, res) => {
    const courses = await Course.getAll();
    res.render('courses', {
        title: 'Courses',
        isCourses: true,
        courses
    });
});

router.get('/:id', async (req, res) => {
    const course = await Course.getById(req.params.id);
    res.render('course', {
        title: course.title,
        course
    });
});

router.get('/:id/edit', async (req, res) => {


    if (!req.query.allow) {
        return res.redirect('/courses');
    }
    try {
        const course = await Course.getById(req.params.id);
        res.render('editcourse', {
            title: `Edit ${course.title}`,
            course
        });
    } catch (e) {
        console.log(e)
    }
});

router.post('/edit', async (req, res) => {
    const {id, title, url, price} = req.body;
    await Course.update({
        id,
        title,
        url,
        price
    });
    res.redirect('/courses');
});

module.exports = router;