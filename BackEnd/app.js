const app=require('express')()
const http=require('http').Server(app)
const io=require('socket.io')(http)





app.get('/f',(req,res)=>{
    res.send('hello nigga')
})

http.listen(3000, ()=> {
    console.log('listening on *:3000');
 });


