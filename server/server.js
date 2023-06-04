import express from "express";
import cors from "cors";
import { readdirSync } from "fs";
import mongoose from "mongoose";
import csrf from "csurf";
import cookieParser from "cookie-parser";
import morgan from "morgan";
require("dotenv").config();

const csrfProtection = csrf({ cookie: true });

// crear la aplicación express
const app = express();

// base de datos
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("**CONEXIÓN A LA BASE DE DATOS EXITOSA**"))
  .catch((err) => console.log("ERROR EN LA CONEXIÓN A LA BASE DE DATOS => ", err));

// aplicar middlewares
app.use(cors());
app.use(express.json({ limit: "5mb" }));
app.use(cookieParser());
app.use(morgan("dev"));

// rutas
readdirSync("./routes").map((r) => app.use("/api", require(`./routes/${r}`)));
// csrf
app.use(csrfProtection);

app.get("/api/csrf-token", (req, res) => {
  res.json({ csrfToken: req.csrfToken() });
});

// puerto
const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`El servidor se está ejecutando en el puerto ${port}`));
