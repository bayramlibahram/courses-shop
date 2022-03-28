const {Router} = require('express');
const router = Router();
const Card = require('../models/card');
const Course = require('../models/course');

router.get('/', async (req, res) => {
    try {
        const card = await Card.fetch();
        res.render('card', {
            title: 'Card',
            isCard: true,
            courses: card.courses,
            price: card.price
        });
    } catch (e) {
        console.log(e)
    }
});

router.post('/add', async (req, res) => {
    try {
        const course = await Course.getById(req.body.id);
        await Card.add(course);
        res.redirect('/card');
    } catch (err) {
        console.log(err)
    }
});

router.delete('/remove/:id', async (req, res) => {
    const card = await Card.removeById(req.params.id);
    res.status(200).json(card);
});

module.exports = router;