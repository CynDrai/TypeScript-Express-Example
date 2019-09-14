"use strict";

import {Request, Response} from "express";
import { Teste } from "../models/Teste";

export async function list(req: Request, res: Response) {
  // Lógica da Rota Abaixo
  const entityTeste: Teste = new Teste();
  entityTeste.cdTeste = 1;
  entityTeste.dsTeste = "Teste";
  entityTeste.dtTeste = new Date();

  res.status(200).send(entityTeste);
}
