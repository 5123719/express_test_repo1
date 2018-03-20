const express = require('express');
const app = express();

const logger = require('morgan');
app.use(logger('dev'));



app.get('/api/test', (req, res) => {
    res.json({ 
        text: "Hello World" 
    });
 });

 
 app.get('/api/check', (req, res) => {
    res.json(
        {
            fornavn:"Zoya",
            efternavn:"Noor",
            by:"Vallensbæk",
            alder:23
        }
    );
 });

 //opgave 2//
 app.get('/api/work', (req, res) => {
     res.json({
         Arbejd:"Burger King",

     })
 })

 app.get('/api/workout', (req, res) => {
     res.json({
        Fitnesscenter:"Fitness World",
     })
 })



 app.use(express.static('public'));


app.listen(3000, (err) => {
    if (err) {
       console.log(err);
    }
    console.log('App is listening on http://localhost:3000');
 });