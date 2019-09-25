"use strict";

import {Request, Response} from "express";
import { getRepository } from "typeorm";
import { Teste } from "../models/Teste";

export async function list(req: Request, res: Response) {

  // EntityManager
  const entityManager = getRepository(Teste);

  // Lógica da Rota Abaixo
  const entityTeste: Teste = new Teste();
  entityTeste.dsTeste = "Teste";
  entityTeste.dtTeste = new Date();

  // Save da Entidade
  await entityManager.save(entityTeste);

  const result = await entityManager.find();

  res.status(200).send(result);
}

export async function findById(req: Request, res: Response) {
  // Lógica da Rota Abaixo
  res.status(200).send("<h1>Test /findById</h1>");
}
