import express from "express";
import app from "./app.js";
import dotenv from "dotenv";
dotenv.config();
const port = process.env.PORT;
console.log("PORT:", port);

// app.get("/",(req,res)=>{
//     res.send("server setup successfully done");
// });

// app.get("/home",(req,res)=>{
//     res.send("welcome to home page");
// });

// app.get("/home/:userId",(req,res)=>{
//   const userId = req.params.userId;
//   res.send({message:"home page",client:userId});
// });

console.log("-----------Server is starting...");

app.listen(Number(port), () => {
  console.log(`Server is running on port ${port}`);
});
