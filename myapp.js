const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const subjects=[
    {id:1, name:"Subject A"},
    {id:2, name:"Subject B"},
    {id:3, name:"Subject C"}
]

app.get('/', function(req,res){
    res.send('Hello world!')
});

app.get('/api/subjects',function(req,res){
    res.send(subjects);
})

app.get('/api/subject/:id',function(req,res){
    const subject = subjects.find(c=>c.id == parseInt(req.params.id));
    if(!subject){
        return res.status(404).send("The subject does not exist");
    }
    res.send(subject);
});

app.post('/api/subjects',function(req,res){

    if(!req.body.name || req.body.name.length<4){
        return res.status(400).send("This is not acceptable!")
    }
    const subject = {
        id:subjects.length + 1,
        name:req.body.name
    }
    subjects.push(subject);
    res.send(subjects);

})

app.put()

const port = process.env.PORT || 3000;
app.listen(port, ()=>console.log(`listening to ${port}`));