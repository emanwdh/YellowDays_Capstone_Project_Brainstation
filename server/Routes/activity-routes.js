import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);
import express from "express";
const router = express.Router();
import * as activityController from '../Controllers/activityController.js'

router
  .route("/")
  .post(activityController.addActivity)
  .get(activityController.getActivitiesByUser);

router 
.route("/activity")
.get(activityController.getSingleActivity)
.delete(activityController.deleteSingleActivity)
.put(activityController.editSingleActivity);

export default router;
