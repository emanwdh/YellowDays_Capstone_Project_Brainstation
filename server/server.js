import "dotenv/config";
import express from "express";
import cors from "cors";
import activityRoutes from "./Routes/activity-routes.js";
import tagRoutes from "./Routes/tag-routes.js";
import userRoutes from "./Routes/user-routes.js";
import jwt from "jsonwebtoken";

const app = express();

const PORT = 5050;
const SECRET_KEY = process.env.SECRET_KEY;

//middleware
app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Your app is running on Port ${PORT}`);
});

function authorize(req, res, next) {
    const { authorization } = req.headers;
    const token = authorization.slice("Bearer ".length);
  
    try {
      const payload = jwt.verify(token, SECRET_KEY);
      req.decoded = payload;
      next();
    } catch (error) {
      res.sendStatus(401);

    }
  }


app.use("/activities", authorize, activityRoutes);
app.use("/tags", authorize,  tagRoutes);
app.use("/users", userRoutes);
