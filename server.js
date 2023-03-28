const express = require('express');
const app = express();
const  budgets  = require('./models/budget');


app.set('view engine', 'ejs');
app.use(express.json());

app.use(express.urlencoded({ extended:false }));
app.use(express.static('public'));


app.get('/budgets', (req, res) => {
    let total = 0;
    for(let i = 0; i < budgets.length; i++) {
        total += budgets[i].amount;
    }
    res.render('index', {budgets});
})


app.get('/budgets/new', (req, res) => {
    for(let i = 0; i < budgets.length; i++) {
        console.log(budgets[i].amount);
        parseInt(budgets[i].amount);
    }
    res.render('new');
})


app.get('/budgets/:index', (req, res) => {
    let thisBudget = budgets[req.params.index];
    res.render('show', {budget: thisBudget});
})


app.post('/budgets', (req, res) => {
    budgets.unshift(req.body);
    budgets[0].amount = parseInt(budgets[0].amount);
    res.redirect('/budgets');
})


app.get('/*', (req, res) => {
    res.send("You've done bad");
})


app.listen(4000, () => {
    console.log(`Server is listening to port 4000`);
})