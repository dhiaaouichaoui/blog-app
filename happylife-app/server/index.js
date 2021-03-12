const express = require('express');
const bodyParser = require('body-parser');

const db = require('../database-mysql');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.use(express.static(__dirname + '/../react-client/dist'));



app.get('/api/life', (req, res) => {
  db.getpost((err,results)=>{
    if(err){
      console.log(err,'ERROR')
    }
    res.send(JSON.stringify(results))
  })
  
    
});

app.post('/api/life',(req,res)=>{
  db.sharepost([req.body.title,req.body.name,req.body.image,req.body.body],(err,results)=>{
    if(err){
      console.log(err,'err said hello')
    }
    res.send(JSON.stringify(results))
    
  })
})
app.patch(`/api/life/:id`,(req,res)=>{
  console.log("heyy",req.body)
  db.updateText(req.params.id,req.body.body,(err,result)=>{
    if(err){
      console.log(err,'faild update')
    }
    res.json('updated!')
    
  })
})
app.delete('/api/life/:id',(req,res)=>{
  db.deletepost([req.params.id],(err,result)=>{
    if(err){
      console.log(err,'faild delete')
    }
    res.json('deleted!')
  })
})



    
  


//TODO - add additional route handlers as necessary

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
