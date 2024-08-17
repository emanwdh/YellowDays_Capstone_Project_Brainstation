import "dotenv/config";
import express from "express";
import cors from "cors";
import activityRoutes from "./Routes/activity-routes.js";
import tagRoutes from "./Routes/tag-routes.js";
import userRoutes from "./Routes/user-routes.js";
import jwt from "jsonwebtoken";

const app = express();

//use env file later
const PORT = 5050;

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

app.use("/activities", activityRoutes);
app.use("/tags", tagRoutes);
app.use("/users", userRoutes);
