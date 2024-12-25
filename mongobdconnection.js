mongoose= require('mongoose')
const MONG_URI= "http://localhost:5000/" 
//const MONG_URI= 'mongodb+srv://nhq:hhqazi2906@c d5006.438bk.mongodb.net/labIek7?retryWrites=true& w=majority' mongoose.connect(MONG_URI,{useUnifiedTopology:tru e,useNewUrlParser:true, useFindAndModify: false })
const db= mongoose.connection;
db.on('error',function(err){
console.log('Error occured'+err)
})
db.once('connected',function(){
console.log("Current Version of Mongoosinstlled "+mongoose.version)
console.log('connection is successful to'+ MONG_URI)
})
module.exports=db