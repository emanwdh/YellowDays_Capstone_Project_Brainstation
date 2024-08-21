import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);
import express from "express";
const router = express.Router();
import * as userController from "../Controllers/userController.js";

router.route("/signup").post(userController.register);

router.route ("/login").post(userController.login);


export default router;
