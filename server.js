const express = require('express');
const app = express();
const  budgets  = require('./models/budget');

// middleware
app.set('view engine', 'ejs');
app.use(express.json());

app.use(express.urlencoded({ extended:false }));
app.use(express.static('public'));

// index routes
app.get('/budgets', (req, res) => {
    let total = 0;
    for(let i = 0; i < budgets.length; i++) {
        total += budgets[i].amount;
    }
    res.render('index', {budgets});
})

// new route
app.get('/budgets/new', (req, res) => {
    for(let i = 0; i < budgets.length; i++) {
        console.log(budgets[i].amount);
        parseInt(budgets[i].amount);
    }
    res.render('new');
})

// show route
app.get('/budgets/:index', (req, res) => {
    let thisBudget = budgets[req.params.index];
    res.render('show', {budget: thisBudget});
})

// create route
app.post('/budgets', (req, res) => {
    budgets.unshift(req.body);
    budgets[0].amount = parseInt(budgets[0].amount);
    res.redirect('/budgets');
})

// fallback route
app.get('/*', (req, res) => {
    res.send("You've done bad");
})

// Listen at the bottom
app.listen(4000, () => {
    console.log(`Server is listening to port 4000`);
})