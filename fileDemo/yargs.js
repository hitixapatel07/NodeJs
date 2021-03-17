

var fs = require('fs');
var yargs = require('yargs');

var array_fileList = [];
var filename = yargs.argv.filename; 

if(filename){
    console.log('your filename = ',filename);
    fs.readFile("ArrayFile.txt",(err,data)=>{
        if(data){
            array_fileList = JSON.parse(data);
            console.log("file exists status:",array_fileList.includes(filename));
    
            if(array_fileList.includes(filename)){
    
                return console.error("file already exists!! Give different file name");
        
            }
            else{
                array_fileList.push(filename);
                console.log("array_fileList =",array_fileList);
                fs.writeFile("ArrayFile.txt",JSON.stringify(array_fileList),(err)=>{
                    if(err)
                    console.log(err);
                })
    
                fs.writeFile(filename,"You are awesome", (err)=>{
                    if(err)
                    throw err;
                    else
                    console.log("data-written done successfully");
                })
            }
        }
    });
    
}else{
    console.log('Enter file name as argument.');
    console.log('eg: --filename=yourFileName.txt');
}



