// Create Directory ( Hint: fs.mkdir )
// Remove Directory ( Hint: fs.rmdir )
// Write File 
// Read File 
// Delete File
// Append data to file
// Update / Replace file with new data
// Rename File

const fs = require('fs');

let nameDir = "FSdir";
// Create Directory ( Hint: fs.mkdir )
fs.mkdir(nameDir,function(err,result){
    if(err){
        console.log(err);
    }else{
        console.log(result," Create Directory");
    }
});

// Remove Directory ( Hint: fs.rmdir )
fs.rmdir(nameDir,function(err,result){
    if(err){
        console.log(err);
    }else{
        console.log(result," Remove Directory");
    }
});

var filename = "FSfile.txt";
var data = "Hello World...";
// Write File 
fs.writeFile(filename,data,function(err){
    if(err){
        console.log(err);
    }else{
        console.log("Write File");
    }
});

// Read File 
fs.readFile(filename,"utf-8",function(err,result){
    if(err){
        console.log(err);
    }else{
        console.log(result);
    }
});

// Append data to file
fs.appendFile(filename,"Kevin",function(err,result){
    if(err){
        console.log(err);
    }else{
        console.log(result);
    }
});

// Update / Replace file with new data
data = "Replace file with new data";
fs.writeFile(filename,data,function(err){
    if(err){
        console.log(err);
    }else{
        console.log("Replace file with new data");
    }
});

// Rename File
var renameFileName = "ReFSfile.txt";
fs.rename(renameFileName,filename,function(err){
    if(err){
        console.log(err);
    }else{
        console.log("Rename File");
    }
});