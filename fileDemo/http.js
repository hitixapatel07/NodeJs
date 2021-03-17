const http = require('http');

http.createServer( (req, res)  => {
    console.log('Req received');
    console.log(req.url);

    if(req.url == '/'){
        res.write('<div> Welcome to Home Page. </div>');
    }else {
        res.write ('<div> Welcome to Web Page. </div>');
        //res.write('{Page: "about"}');
    }
res.end();
}).listen(3000);