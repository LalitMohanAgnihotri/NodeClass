import express from 'express';

import userRoutes from "./routes/userRoutes.js";
const app = express();
const port = 3000;

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

app.use("/",userRoutes);

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});