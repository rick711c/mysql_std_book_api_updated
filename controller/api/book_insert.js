const db_connection = require("../../config/db_connection");
module.exports = {
    insertBook: (req, res) => {
        const book_id = req.body.book_id;
        const book_name = req.body.book_name;
        const std_id = req.body.std_id;
        //validating std_id
        db_connection.query(`select * from std_info where std_id=${std_id}`, (err, result) => {
            //if valiadte
            if (Object.entries(result).length != 0) {

                db_connection.query('insert into book_info values(?,?,?)', [book_id, book_name, std_id], (err, result1) => {
                    if (err) {
                        console.log("book data could not inserted");
                    }
                    else {
                        res.send("book data inserted");
                    }
                });

            }
            //if not validate
            else {
                res.send("invalid std is");
            }
        });
    }
};
