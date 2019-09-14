"use strict";

import cors from "cors";
import express, {Express} from "express";
const app: Express = express();

// Import de Rotas
import testeRoute from "./TesteRoute";

// Uso de Rotas
app.use("/teste", testeRoute);

// Habilita o CORS
app.use(cors());

export default app;
