var app = require("express")();
var bodyparser = require("body-parser");
var  path = require("path");
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.get('/', function (req,res) {
    res.sendFile(path.join(__dirname+"/index.html"))
});
app.post('/',function(req, res){
      res.send("<h1>Hello" +"\n"+req.body.t1+"\n"+"How are you </h1>")
});
app.listen(9000,function(){
    console.log("server listing")
})
