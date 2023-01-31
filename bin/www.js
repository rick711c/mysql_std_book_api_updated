const express=require('express');
const app=express();
//const std=require("../controller/std_logic")
const UseRouter=require("../controller/api/router")
app.use(express.json());
app.use("/ping",UseRouter)
app.listen(3000);