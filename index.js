const express = require('express');
const app = express();
const expressHandlebars = require('express-handlebars');

const hbs = expressHandlebars.create({
    defaultLayout: "main",
    extname: "hbs"
});

//App engine
app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", "views");

//App configs
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));

//App routes
app.use('/', require('./routes/home'));
app.use('/courses', require('./routes/courses'));
app.use('/addcourse', require('./routes/addcourse'));
app.use('/card', require('./routes/card'));

//App start
app.listen(5000, () => {
    console.log(`Server has been started`);
});