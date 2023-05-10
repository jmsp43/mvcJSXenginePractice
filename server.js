const express = require('express')
const people = require('./models/people.js')
const app = express()
const port = 3000

//middleware
app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});
app.use(express.urlencoded({extended:false}));

app.set('view engine', 'jsx');
app.engine('jsx', require('jsx-view-engine').createEngine());

//routes
app.get('/', (req, res) => {
    res.send('home page of the people site')
})

app.get('/people', function(req, res){
    res.render('Index', { people: people });
}); 

app.get('/people/new', (req, res) => {
    res.render('New');
});

app.post('/people', (req, res) => {
    if(req.body.boolean === 'on'){ 
        req.body.boolean = true; 
    } else { 
        req.body.boolean = false;
    }
    people.push(req.body);
    res.redirect('/people');
});

app.get('/people/:indexOfPeopleArr', function(req, res){
    res.render('Show', {
        person: people[req.params.indexOfPeopleArr]
    });
}); 

// app.post('/people/:indexOfPeopleArr/edit', (req, res) => {

//     //edit someone's information

//     res.redirect('/people/:indexOfPeopleArr');
// });

  
//listen
app.listen(port, () => {
    console.log(`listening at port ${port}`)
} )