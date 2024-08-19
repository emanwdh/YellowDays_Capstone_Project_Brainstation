import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);
import express from "express";
const router = express.Router();
import * as activityController from '../Controllers/actvitityController.js'

router
  .route("/")
  .post(activityController.addActivity)
  .get(activityController.getActivitiesByUser);

export default router;
