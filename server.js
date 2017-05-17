var express = require('express'),
    app = express();

var parallax = require('scrollmonitor-parallax');




app.use(express.static(__dirname +'/public'));
app.use('/js',express.static(path.join(__dirname, 'public/app.js')));
app.use('/css',express.static(path.join(__dirname, 'public/main.css')));
app.get('/', function index(req, res) {
  res.sendFile('/index.html', {
    root: __dirname
  });
});

//=============
//   Server
//=============

app.listen(process.env.PORT || 3000, function(){
  console.log('jesse portfolio is on 3000');
});
