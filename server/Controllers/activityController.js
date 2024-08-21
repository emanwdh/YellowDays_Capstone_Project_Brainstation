import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);

const addActivity = async (req, res) => {
  if (
    !req.body.priority ||
    !req.body.name ||
    !req.body.type ||
    !req.body.user_id
  ) {
    return res
      .status(400)
      .send("Please ensure that all required fields are filled out.");
  }

  try {
    const result = await knex("Activities").insert(req.body);
    const createdActivity = await knex("Activities");
    res.status(201).json(createdActivity);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Unable to create Activity item" });
  }
};

const getActivitiesByUser = async (req, res) => {
  try {
    const data = await knex("Activities").where({
      user_id: req.query.user_id,
      priority: req.query.priority,
    });
    res.status(200).json(data);
  } catch (err) {
    res.status(400).send(`Error retrieving Users: ${err}`);
  }
};

const getSingleActivity = async (req, res) => {
  try {
    const data = await knex("Activities").where({
      user_id: req.query.user_id,
      activity_id: req.query.activity_id,
    });
    res.status(200).json(data);
  } catch (e) {
    res.status(400).send(`Error retrieving Activity: ${e}`);
  }
};

const deleteSingleActivity = async (req, res) => {
  try {
    await knex("Activities")
      .where({
        user_id: req.query.user_id,
        activity_id: req.query.activity_id,
      })
      .del();
    res.status(204);
  } catch (e) {
    res.status(500).send(`Error deleting Activity: ${e}`);
  }
};

const editSingleActivity = async (req, res) => {
  const { free, interest, name, priority, resource, type, url } = req.body;
  const activityUpdated = {
    free,
    interest,
    name,
    priority,
    resource,
    type,
    url,
  };
  try {
    const updatedActivity = await knex("Activities")
      .where({
        user_id: req.query.user_id,
        activity_id: req.query.activity_id,
      })
      .update(activityUpdated);
    res.status(200).json(updatedActivity[0]);
  } catch (e) {
    res.status(500).send(`Error updating activity: ${e}`);
  }
};

const getAllUserActivities = async (req, res) => {
  try {
    const data = await knex("Activities").where({
      user_id: req.query.user_id,
    });
    res.status(200).json(data);
  } catch (err) {
    res.status(400).send(`Error retrieving Users: ${err}`);
  }
};



export {
  getActivitiesByUser,
  addActivity,
  getSingleActivity,
  deleteSingleActivity,
  editSingleActivity,
  getAllUserActivities
};
