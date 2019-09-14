"use strict";

import * as bodyParser from "body-parser";
import express from "express";
import http from "http";
import routes from "./routes/routes";

const app = express();
const server = http.createServer(app);
const port = 3000;

// Body-Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// Routes
app.use(routes);

// Start Express Server
server.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log("API Rodando na porta " + port);
});
