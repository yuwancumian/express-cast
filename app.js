var express = require('express');
var app = express();
var hbs = require('hbs');

app.set('view engine', 'hbs');

app.get('/',function(req,res){
	res.render('index');
});

app.get('/blog',function(req,res){
	res.render('blog');
});


app.use('/public', express.static('public'));
var port = Number(process.env.PORT || 5000);
app.listen(port);
