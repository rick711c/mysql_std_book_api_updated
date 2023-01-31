const db_connection = require("../../config/db_connection");
module.exports = {
    deleteBook: (req, res) => {
        const book_id = req.body.book_id;
        const book_name = req.body.book_name;
        console.log(book_id, book_name);
        if (book_id === undefined && book_name === undefined) {
            res.send("please enter some parameter")
        }
        else if (book_id !== undefined || book_name !== undefined) {
            if (book_name !== undefined) {
                db_connection.query(`DELETE FROM book_info WHERE book_name=(?)`, [book_name], (err, result1) => {
                    console.log(book_name);
                    if (err) {
                        res.send(err)
                    }
                    else {
                        if (result1.affectedRows == 0) {
                            res.send("no book found with this name")
                        }
                        else {
                            res.send("book deleted");
                        }
                    }
                })

            }
            else {
                db_connection.query(`delete from book_info where book_id =(?)`, [book_id], (err, result2) => {
                    if (err) {
                        //res.send("could not delete book")
                        res.send(err);
                    }
                    else {

                        if (result2.affectedRows == 0) {
                            res.send("no book found with this id")
                            //res.send(result2)
                        }
                        else {

                            res.send("book deleted");
                            // res.send(result2)
                        }
                    }
                })
            }
        }
    }
}