const express = require('express');
const app = express();

const bodyParser = require('body-parser');


// app.get('/users/:id', function(req, res){
//   console.log(req.params.id)
// })

app.use(express.static('public'));
app.get('/', function(req, res){
  console.log('hello');
  res.sendFile('index.html')
})

// app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.post('/login',function(req,res){
  console.log(req.body.username);
})


app.listen(3000,function(){
  console.log('3000');
})
