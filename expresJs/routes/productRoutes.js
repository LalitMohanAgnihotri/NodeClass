import express from 'express';
const routes=express.Router();

import { getProducts } from "../controller/productController";
import { getProductById } from "../controller/productController";
import { getProductByName } from "../controller/productController";


export default routes;
