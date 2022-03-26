const {Router} = require("express");
const router = Router();
const Course = require('../models/course');

router.get('/', (req, res) => {
    res.render('addcourse',{
        title:'Add course',
        isAddcourse:true
    });
});

router.post('/', async (req, res) =>{
    const {title, price, url} = req.body;
    const course = new Course(title, price, url);
    await course.save();
    res.redirect('/courses')
});


module.exports = router;