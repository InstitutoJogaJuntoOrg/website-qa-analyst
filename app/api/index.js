import express from "express";
import cors from "cors";
import useRoutes from "./routes/products.js";

const PORT = process.env.PORT || 3301 

const app = express();

app.use(express.json());
app.use(cors());

import path from 'path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, 'uploads')));

app.use("/", useRoutes);

app.post("/", (req, res) => {
  console.log(req.body);
});
///////// ALTERAR PORTA ANTES DE START
app.listen(PORT);