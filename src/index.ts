"use strict";

import * as bodyParser from "body-parser";
import express from "express";
import http from "http";
import {Routes} from "./routes/routes";

const app = express();
const server = http.createServer(app);
const port = 3000;

const routePrv: Routes = new Routes();

// Body-Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// Routes
routePrv.routes(app);

// Start Express Server
server.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log("API Rodando na porta " + port);
});
