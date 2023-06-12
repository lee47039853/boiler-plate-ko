console.log('process.env.NODE_ENV => ' + process.env.NODE_ENV)
if(process.env.NODE_ENV==='proc'){
    module.exports=require('./prod');
}else if(process.env.NODE_ENV==='dev'){
    module.exports=require('./dev');
}else{
    module.exports=require('./dev');    
}