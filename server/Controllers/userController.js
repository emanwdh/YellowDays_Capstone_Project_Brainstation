import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);
import bcrypt from "bcrypt";
const saltRounds = 10;
import jwt from "jsonwebtoken";
import "dotenv/config";
const SECRET_KEY = process.env.SECRET_KEY;

const register = async function (req, res) {
  const password = req.body.password;
  const encryptedPassword = await bcrypt.hash(password, saltRounds);
  let user = {
    username: req.body.username,
    password: encryptedPassword,
  };
  const userExists = await knex("Users").where({ username: user.username });

  if (userExists[0]) {
    res.status(500).json({
      message: "User already exists, please login using the login page",
    });
  } else {
    try {
      const result = await knex("Users").insert(user);
      const createdUser = await knex("Users").where({
        username: user.username,
      });
      res.status(201).json(createdUser);
    } catch (error) {
      res.status(500).json({ message: "Unable to register user" });
    }
  }
};

const login = async function (req, res) {
  const { username, password } = req.body;

  try {
    const retrievedUser = await knex("Users").where({ username: username });
    if (retrievedUser) {
      if (bcrypt.compare(password, retrievedUser[0].password)) {
        let token = jwt.sign({ username: username }, SECRET_KEY);
        res.json({
          token: token,
          id: retrievedUser[0].user_id,
          username: retrievedUser[0].username,
        });
      }
    } else {
      res
        .sendStatus(401)
        .json({ message: "Password and Username do not match" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Unable to login, please sign up prior to login" });
  }
};

export { register, login };
