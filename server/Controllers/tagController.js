import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);

const addTag = async (req, res) => {
  if (!req.body.title) {
    return res
      .status(400)
      .send("Please ensure that all required fields are filled out.");
  }

  try {
    const result = await knex("Tags").insert(req.body);
    const createdTag = await knex("Tags");
    res.status(201).json(createdTag);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Unable to create Tag" });
  }
};

export { addTag };
