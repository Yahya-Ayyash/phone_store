import express from "express";
import { testConnection } from "./config/db.js";
import useRouter from "./routes/usersRoutes.js";

// membuat server
const app = express();
const port = 3000;

app.use(express.json());
 
app.use(useRouter);

app.listen(port, () => {
  console.log(`server running at http://localhost:${port}`);
  testConnection();
});