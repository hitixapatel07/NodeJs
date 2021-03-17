// // app js App for assignment

// const express = require('express');

// const app = express(); // app will be created.

// app.get('/', function (req, res){
//     //res.send('<h1>Hello World !! </h1>');
//     res.json(`{"page": "Home"}`);

// });

// app.get('/about', function (req, res){
//     res.send('Welcome to about page ');
// });

// app.listen(3001);

const fs = require('fs');
        // require express
        const express = require('express');
        // create object and add port
        const app = express();
        const port = 3001;
        
        // Define default route with express
        app.get('/',(req,res) => {
            res.send('<h1> Welcome to express server</h1>')
        })
        
        // Read file using express server
        app.get('/demo', (req,res) => {
            fs.readFile('./Data/db.json',(err,result) => {
                if(err){
                    throw err;
                }else {
                    res.send(JSON.parse(result))
                }
            })
        })
        
        // Create server to listen on port
        app.listen(port,(err) => {
            console.log('server is running on port '+port);
        })