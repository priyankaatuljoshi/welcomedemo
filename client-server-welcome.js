var h=require('http');
var u=require('url');
h.createServer(function(req,res){
var url_p=u.parse(req.url,true)
var nm=url_p.query.name;
var c=url_p.query.color;
res.writeHead(200,{'content_type':'text/html'})
res.write("<h1 style='color:"+c+"'>welcome "+nm+"</h1>");
res.end();

}).listen(9000,function(){
    console.log("server started")
});