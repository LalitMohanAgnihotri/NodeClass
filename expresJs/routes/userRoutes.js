import express from 'express';
const routes=express.Router();

import {getuser} from "../controller/userController.js";
import {getuserById} from "../controller/userController.js";
import {adduser} from "../controller/userController.js";

// routes.get("/getuser",getuser);
// routes.get("/getuser/:id",getuserById);
// routes.post("/adduser",adduser);

routes.get("/user",getuser);
routes.get("/user/:id",getuserById);
routes.post("/user",adduser);


routes
.route("/user")
.get(getuser)
.post(adduser);


export default routes;
