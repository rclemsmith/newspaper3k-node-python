// import express JS module into app 
// and creates its variable. 
var express = require('express'); 
var app = express(); 
var cors = require("cors");

app.use(cors());
  
// Creates a server which runs on port 3000 and  
// can be accessed through localhost:3000 
app.listen(process.env.PORT, function() { 
    console.log(`Server running on port ${process.env.PORT}`); 
} ) 
  
// Function callName() is executed whenever  
// url is of the form localhost:3000/name 

app.get("/",(req,res)=>{
    res.send("From Node Python");
});
app.get('/name', callName); 
  
function callName(req, res) { 
    // console.log(req.query.firstname + "Awesome"+req.query.lastname)
      
    // Use child_process.spawn method from  
    // child_process module and assign it 
    // to variable spawn 
    var spawn = require("child_process").spawn; 
      
    // Parameters passed in spawn - 
    // 1. type_of_script 
    // 2. list containing Path of the script 
    //    and arguments for the script  
      
    // E.g : http://localhost:3000/name?firstname=Mike&lastname=Will 
    // so, first name = Mike and last name = Will 
    var process = spawn('python',["./app.py", 
                            req.query.url, 
                            ] ); 
  
    // Takes stdout data from script which executed 
    // with arguments and send this data to res object 
    process.stdout.on('data', function(data) { 
        console.log(data);
        res.send(data.toString()); 
    } ) 
} 