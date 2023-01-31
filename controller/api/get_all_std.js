const db_connection = require("../../config/db_connection");
module.exports = {
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