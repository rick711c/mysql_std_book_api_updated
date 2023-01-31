const db_connection = require("../../config/db_connection");
module.exports = {
    //insert_students
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
    },
    //delete students
    deleteStudent: (req, res) => {
        const std_id = req.body.std_id;
        db_connection.query(`select * from std_info where std_id=${std_id}`, (err, result) => {
            if (Object.entries(result).length != 0) {
                db_connection.query(`select * from book_info where std_id=${std_id}`, (err, result1) => {
                    if (Object.entries(result1).length != 0) {
                        res.send("please return all books and try again");
                    }
                    else {
                        db_connection.query(`delete from std_info where std_id=${std_id}`);
                        res.send("Deleted!!");
                    }
                });
            }
            else {
                res.send("No student found")
            }
        });
    },
    //get All Students
    getAllStd: (req, res) => {
        db_connection.query(`SELECT std_info.std_id, std_info.std_name FROM std_info JOIN book_info where std_info.std_id=book_info.std_id`, (err, result) => {
            if (err) {
                res.send("can't load all students")
            }
            else {
                res.send(result);
            }
        });
    }
}