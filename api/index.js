import express from "express";
import cors from "cors";
import PaisRouter from "./routes/pais.js";
import GrupoRouter from "./routes/grupo.js";

const app = express();

app.use(cors());

app.use(express.json());


app.use("/", PaisRouter);

app.use("/", GrupoRouter);

app.listen(9090, () => {
  console.log(`Server rodando: http://localhost:9090`);
});

app.get("/", (_, res) => {
  res.send("Home Page");
});
