const mysql=require("mysql");
const db_connection=mysql.createConnection({
    database:"std_book_api",
    host:"localhost",
    user:"sc",
    password:"sc",
})
db_connection.connect((err)=>{
    if(err){
        console.log("Cannot connect to the Database")
    }
    else{
        console.log("Database connection established")
    }
})
module.exports=db_connection;