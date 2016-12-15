const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const jsonParser = bodyParser.json();

let fewestGuesses= 3;

app.get('/fewest-guesses', function(req, res){
	res.status(200).json(fewestGuesses);
})

app.post('/fewest-guesses', jsonParser, function(req, res){

	res.send('ok posted')
})

const PORT = 8081;

app.listen(PORT, function(){
	console.log('Example app listening on localhost:' + PORT);
});