import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { db } from "./config/index.js";
import { AuthRoute, UserRoute } from "./routes/index.js";

dotenv.config();
const app = express();

// db.table("ms_user")
//   .first()
//   .then((row) => {
//     console.log(row);
//   });

const port = process.env.APP_PORT || 3001;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true, limit: "30mb" }));
app.use(bodyParser.json({ limit: "30mb" }));

app.use("/api/user", UserRoute);
app.use("/api", AuthRoute);

app.listen(port, () => {
  console.log(`Server run on port : ${port}`);
});
