import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);
import express from "express";
const router = express.Router();
import * as tagController from '../Controllers/tagController.js';


router
  .route("/")
  .post(tagController.addTag);
 

export default router;