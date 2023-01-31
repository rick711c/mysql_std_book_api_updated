const db_connection = require("../../config/db_connection");
module.exports = {
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
    }
}