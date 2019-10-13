"use strict";

import * as bodyParser from "body-parser";
import express from "express";
import http from "http";
import { createConnection } from "typeorm";
import routes from "./routes/routes";

createConnection().then((connection) => {

  const app = express();
  const port = normalizePort(process.env.PORT || "3000");
  const server = http.createServer(app);

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

function normalizePort(val: string) {
  const port = parseInt(val, 10);
  if (isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false;
}
