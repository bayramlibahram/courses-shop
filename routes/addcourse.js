const {Router} = require("express");
const router = Router();

router.get('/', (req, res) => {
    res.render('addcourse',{
        title:'Add course',
        isAddcourse:true
    });
});

router.post('/', (req, res) =>{
    console.log(req.body);
    res.redirect('/courses')
});


module.exports = router;