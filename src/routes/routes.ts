"use strict";

import cors from "cors";
import {Express} from "express";
import testeRoute from "./TesteRoute";

export class Routes {
  public routes(app: Express): void {
    // app.route("/").get((req: Request, res: Response) => {
    //   res.status(200).send(res.req.body); // Envio de Objetos e requisição
    // });

    app.use("/teste", testeRoute);

    // Habilita o CORS
    app.use(cors());
  }
}
