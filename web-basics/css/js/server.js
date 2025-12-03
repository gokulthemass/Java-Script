import{ctreateserver} from "http";
const server = createserver((req,res)=>{
    res.writeHead(200,{'content-Type': 'text/plane'});
    res,end('Hello,VELTECH\n');   
});
server.listen(3000,()=>{
    console.log('server running at http://localhost:3000/');
});