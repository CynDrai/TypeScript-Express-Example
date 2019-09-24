"use strict";

import {Request, Response} from "express";
import { getRepository } from "typeorm";
import { Teste } from "../models/Teste";

export async function list(req: Request, res: Response) {

  // EntityManager
  const entity = getRepository(Teste);

  // Lógica da Rota Abaixo
  const entityTeste: Teste = new Teste();
  entityTeste.dsTeste = "Teste";
  entityTeste.dtTeste = new Date();

  // Save da Entidade
  const result = await entity.save(entityTeste);

  res.status(200).send(result);
}

export async function findById(req: Request, res: Response) {
  // Lógica da Rota Abaixo
  res.status(200).send("<h1>Test /findById</h1>");
}
