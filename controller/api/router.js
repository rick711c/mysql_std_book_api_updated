// const {insertStudent} = require("./std_insert");
// const{insertBook}=require("./book_insert");
// const {deleteStudent}=require("./std_delete")
// const {deleteBook}=require("./book_delete")
// const{getAllStd}=require("./get_all_std")

const std=require("./std.controller")
const book=require("./book.controller")
const router=require("express").Router();
router.get("/",(req,res)=>{
    res.send("hello");
})
router.post("/std_insert",std.insertStudent);
router.post("/book_insert",book.insertBook);
router.post("/del_std",std.deleteStudent);
router.post("/del_book",book.deleteBook);
router.get("/get_all",std.getAllStd);
module.exports=router;
