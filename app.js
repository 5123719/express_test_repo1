const express = require('express');
const app = express();

const logger = require('morgan');
app.use(logger('dev'));

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}));


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

 //NodeJs server del 2//
//req.params//
app.get('/api/test/:id', (req, res) => {
    console.log(req.params.id);
    res.json({
        param: req.params.id
    });
});

//req.query//
app.get('/api/test', (req, res) => {
    console.log(req.query);
    res.json({
        text:"Hello World"
    });
});



 app.use(express.static('public'));

 app.post('/api/formular', (req, res) => {
     res.json({
         besked:"data blev modtaget",
         fornavn: req.body.fornavn,
         efternavn: req.body.efternavn
     });
 });

app.listen(3000, (err) => {
    if (err) {
       console.log(err);
    }
    console.log('App is listening on http://localhost:3000');
 });