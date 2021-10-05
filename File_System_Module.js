// Create Directory ( Hint: fs.mkdir )
// Remove Directory ( Hint: fs.rmdir )
// Write File 
// Read File 
// Delete File
// Append data to file
// Update / Replace file with new data
// Rename File

const readline = require("readline");
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

//filesystem Module
const fs = require('fs');

var filename = "";
var directory = "";
var content = "";

var createDirectoryWizard = () => {
    rl.question("Please Enter Directory Name : ",(ans) => {
        directory = ans;
        // Create Directory ( Hint: fs.mkdir )
        fs.mkdir(ans,function(err){
            if(err){
                console.log(err);
            }else{
                console.log("Create Directory : " + directory);
            }
            repeat();
        });
    });
};

var removeDirectoryWizard = () => {
    rl.question("Please Enter Directory Name Which You Want To Delete : ",(ans) => {
        directory = ans;
        // Remove Directory
        fs.rmdir(directory, (err) => {
            if(err){
                console.log(err);
            }else{
                console.log("Delete Directory : " + directory);
            }
            repeat();
        });
    });
};

var createFileWizard = () => {
    rl.question("Please Enter File Name : ", (ans) => {
        filename = ans + ".txt";
        rl.question("Enter File Content : ", (ans) => {
            content = ans;
            // Write File
            fs.writeFile(filename,content, (err) => {
                if(err){
                    console.log(err);
                }else{
                    console.log("Create File..!");
                }
                repeat();
            });
        });
    });
};

var readFileWizard = () => {
    rl.question("Enter File Name Which You Want To Read : ", (ans) => {
        filename = ans + ".txt";
        // Read File 
        fs.readFile(filename,'utf-8', (err,result) => {
            if(err){
                console.log(err);
            }else{
                console.log(result);
            }
            repeat();
        });
    });
};

var deleteFileWizard = () => {
    rl.question("Enter File Name Which You Want To Delete : ",(ans) => {
        filename = ans + ".txt";
        fs.unlink(filename, (err) => {
            if(err){
                console.log(err);
            }else{
                console.log("Delete File : " + filename);
            }
            repeat();
        });
    });
};

var appendFileWizard = () => {
    rl.question("Enter File name In Which You Want To More Data : ", (ans) => {
        filename = ans + ".txt";
        rl.question("Enter Content : ", (ans) => {
            content = ans;
            fs.appendFile(filename,content, (err) => {
                if(err){
                    console.log(err);
                }else{
                    console.log("Append Content In File : " + filename);
                }
                repeat();
            });
        });
    });
};

var updateFileWizard = () => {
    rl.question("Enter File Name Which All Data You Want To Update : ", (ans) => {
        filename = ans + ".txt";
        rl.question("Enter Content : ", (ans) => {
            content = ans;
            fs.writeFile(filename,content, (err) => {
                if(err){
                    console.log(err);
                }else{
                    console.log("Update File Data : " + filename);
                }
                repeat();
            });
        });
    });
};

var updateNameFileWizard = () => {
    rl.question("Enter File Name Which Name You Want To Change : ", (ans) => {
        filename = ans + ".txt";
        rl.question("Enter New File Name : ", (ans) => {
            var newFilename = ans + ".txt";
            fs.rename(filename,newFilename, (err) =>{
                if(err){
                    console.log(err);
                }else{
                    console.log("Update File Name : " + filename);
                }
                repeat();
            });
        });
    });
};

console.log("Welcome to Kevin's File System..!");

var instruction = () => {
    console.log("\nEnter 1 To Create Directory");
    console.log("Enter 2 To Remove Directory");
    console.log("Enter 3 To Create File And Write");
    console.log("Enter 4 To Read File");
    console.log("Enter 5 To Delete File");
    console.log("Enter 6 To Append Data To File");
    console.log("Enter 7 To Update File With New Data");
    console.log("Enter 8 To Rename File");
    console.log("Enter 0 To Exit");
};

var start = () => {
    rl.question("Enter Your Choise : ", (ans) => {
        if(ans == '1'){
            createDirectoryWizard();
        }else if(ans == '2'){
            removeDirectoryWizard();
        }else if(ans == '3'){
            createFileWizard();
        }else if(ans == '4'){
            readFileWizard();
        }else if(ans == '5'){
            deleteFileWizard();
        }else if(ans == '6'){
            appendFileWizard();
        }else if(ans == '7'){
            updateFileWizard();
        }else if(ans == '8'){
            updateNameFileWizard();
        }else if(ans == '0'){
            rl.close();
        }else{
            console.log("Wrong Choice, Please try again");
            start();
        }
    });
};

var repeat = () => {
    instruction();
    start();
};

console.log("Welcome to Kevin's File System..!");
repeat();
