const fs = require('fs');
const http = require('http')

http.createServer(function(req,res){
    fs.readFile('index.html',function(err,data){
        if(err) throw err;
        res.writeHead(200,{'Content-type':'text/html'})
        res.write(data.toString())
        res.end();
    })
}).listen(8080);

// reads the file
// fs.readFile('input.txt',function(err,data){
//     if(err) throw err;
//     console.log("File been read..")
//     console.log(data.toString());
// });

// writes to the file
// fs.writeFile('input.txt', . Add to  the text, function(err,data){
//     if(err) throw err;
//     console.log('Confirm dataa');
// });

// appends the file
// fs.appendFile('input.txt', function(err,data){

// })

// deletes the file
// fs.unlink('input.txt',function(err){
//     if(err) throw err;
//     console.log("Confirm file deleted");
// })





// for the test lear:
// express, body parser, how to move files around, http