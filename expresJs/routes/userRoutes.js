import express from 'express';
const routes=express.Router();

import {getuser} from "../controller/userController.js";
import {getuserById} from "../controller/userController.js";
import {adduser} from "../controller/userController.js";

routes.get("/getuser",getuser);
routes.get("/getuser/:id",getuserById);
console.log("-----------Server is starting...");

routes.post("/adduser",adduser);
export default routes;
