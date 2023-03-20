import express from "express";
import bodyParser from "body-parser";
import cors from "cors"; //handling resources on different domains
import dotenv from "dotenv";
import helmet from "helmet";  //helmet
import morgan from "morgan";

//importing the routes
import clientRoutes from "./routes/client.js";
import generalRoutes from "./routes/general.js";
import salesRoutes from "./routes/sales.js";
import managementRoutes from "./routes/management.js";

/*CONFIGURATIONS */

dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/* ROUTES */
app.use("/client", clientRoutes); //routes for client functions
app.use("/general", generalRoutes); //for general function
app.use("/sales", salesRoutes); //routes that handles sales
app.use("/management", managementRoutes); //route for management

app.listen(5001, () => {
  console.log("Application started and server connected");
});
