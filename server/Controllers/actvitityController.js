import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);

const addActivity = async (req, res) => {
  if (!req.body.priority || !req.body.name || !req.body.type) {
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

const getAllActivities = async (req, res) => {
  try {
    const data = await knex("Activities");
    res.status(200).json(data);
  } catch (err) {
    res.status(400).send(`Error retrieving Users: ${err}`);
  }
};

export { getAllActivities, addActivity };
