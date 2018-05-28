const express = require('express');
const bodyParser = require('body-parser');

const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.get('/', function(req, res){
    res.send('get this');
})

app.post('/add', function(req, res){
    console.log("req body", req.body);
    res.send('post add');
})

app.listen(3300, 'localhost', function(){
    console.log('listening on port 3300');

})