const {insertStudent} = require("./std_insert");
const{insertBook}=require("./book_insert");
const {deleteStudent}=require("./std_delete")
const {deleteBook}=require("./book_delete")
const{getAllStd}=require("./get_all_std")
const router=require("express").Router();
router.get("/",(req,res)=>{
    res.send("hello");
})
router.post("/std_insert",insertStudent);
router.post("/book_insert",insertBook);
router.post("/del_std",deleteStudent);
router.post("/del_book",deleteBook);
router.get("/get_all",getAllStd);
module.exports=router;
