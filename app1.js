var app = require("express")();
var bodyparser = require("body-parser");
var path= require('path');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
var emp = [  
    {id:1209, ename: "sreevani", "phonenumber":9490003994},
    {id:1209, ename: "sreevani", "phonenumber":9490003994},
    {id:1209, ename: "sreevani", "phonenumber":9490003994}
]
app.get('',function(req,res){
    res.send("<a href='/add'> add list</a>");
})
app.get('/add',function(req,res) {
    res.sendFile(path.join(__dirname +'/index1.html'))
});
app.get('/show', function(req,res){
  
for (var i=0; i<emp.length;i++){
     var e = emp[i];
      res.write(e.id +""+"\n"+e.ename +""+"\n"+e.phonenumber+"\n");
     
}

res.end();

});

app.post('/add', function(req,res){
    var e1 =  {id:req.param('id'), ename:req.param('ename'),phonenumber:req.param('phonenumber')};
    emp.push(e1);
    console.log("Added Sucessfully");
})
app.listen(9000,function(){
    console.log("hello app")
})