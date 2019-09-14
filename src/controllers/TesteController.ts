"use strict";

import {Request, Response} from "express";

export async function list(req: Request, res: Response) {
  // Lógica Abaixo
  res.status(200).send({
    users: [
      {id: 1, name: "How to train your dragon" },
      {id: 2, name: "Queen of Katwe"},
      ]
  });
}
