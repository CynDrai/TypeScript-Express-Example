"use strict";

import { createConnection } from "typeorm";
import express from "express";
import http from "http";
import * as bodyParser from "body-parser";
import routes from "./routes/routes";

createConnection().then((connection) => {

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

  if (connection.isConnected) {
    // tslint:disable-next-line:no-console
    console.log("Banco de Dados Conectado ==> " + connection.driver.database);
  }

});
