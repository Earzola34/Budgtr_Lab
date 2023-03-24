const express = require('express');
const app = express();
const  budgets  = require('./models/budget');

// middleware
app.set('view engine', 'ejs');
app.use(express.json());

app.use(express.urlencoded({ extended:false }));
// app.use(express.static());

// index routes
app.get('/budgets', (req, res) => {
    res.render('index', {budgets});
})

// show route
app.get('/budgets/:index', (req, res) => {
    let budget = budget[req.params.index];
    res.render('show', {budget: budgets});
})

// new route
app.get('/budgets/new', (req, res) => {
    
});

// create route
app.post('/budgets', (req, res) => {

});

// fallback route
app.get('/*', (req, res) => {
    res.send("You've done bad");
});

// Listen at the bottom
app.listen(4000, () => {
    console.log(`Server is listening to port 4000`);
})