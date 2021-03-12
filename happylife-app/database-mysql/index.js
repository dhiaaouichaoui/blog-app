const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);

const getpost=function(callback){
    connection.query('SELECT * FROM users',(err,results)=>{
        if(err){
            console.log(err)
        }
        callback(err,results)
    })
    
}
const sharepost=function(params,callback){
    connection.query('INSERT INTO users (title,name,image,body) VALUES (?,?,?,?)',params,(err,results)=>{
        if(err){
            console.log(err)
        }
        callback(err,results)
    })

}
const updateText =function(id,body,callback){
    connection.query(`UPDATE users SET body = "${body}" WHERE id =${id}`,(err,results)=>{
        if(err){
            console.log(err)
        }
        callback(err,results)

    })
}
const deletepost=function(params,callback){
    connection.query('DELETE FROM users WHERE id=?',params,(err,results)=>{
        if(err) callback(err,null)
        callback(null,results)
    })
}





module.exports = {
    getpost,
    sharepost,
    updateText,
    deletepost
 
};