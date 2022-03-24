const express = require('express');
const app = express();
const expressHandlebars = require('express-handlebars');
const hbs = expressHandlebars.create({
    defaultLayout: "main",
    extname:"hbs"
});

app.engine("hbs", hbs.engine);
app.set("view engine","hbs");
app.set("views", "views");

app.get('/', (req, res) => {
   res.render('index');
});

app.listen(5000, () => {
    console.log(`Server has been started`);
});