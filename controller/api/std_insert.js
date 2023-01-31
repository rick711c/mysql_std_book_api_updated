const db_connection=require("../../config/db_connection")
module.exports = {
    insertStudent: (req, res) => {
        console.log("insert called");
        const std_id = req.body.std_id;
        const std_name = req.body.std_name;
        db_connection.query('insert into std_info values(?,?)', [std_id, std_name], (err, result) => {
            if (err) {
                console.log("student data could not inserted");
            }
            else {
                console.log("student data inserted");
                res.send("done!!")
            }
        });
    }
}