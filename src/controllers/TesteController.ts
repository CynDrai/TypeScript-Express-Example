"use strict";

import { Request, Response } from "express";
import { getRepository, Repository } from "typeorm";
import { Teste } from "../models/Teste";

export async function createOrUpdate(req: Request, res: Response) {

  // EntityManager
  const entityManager: Repository<Teste> = getRepository(Teste);

  const entityTeste: Teste = req.body;
  entityTeste.dtTeste = new Date(entityTeste.dtTeste);
  const result: Teste = await entityManager.save(entityTeste);

  res.status(200).send(result).end();
}

export async function list(req: Request, res: Response) {

  // EntityManager & Result
  const entityManager: Repository<Teste> = getRepository(Teste);
  const result: Teste[] = await entityManager.find({order: {cdTeste: "ASC"}});

  res.status(200).send(result).end();
}

export async function findById(req: Request, res: Response) {

  // EntityManager & Result
  const entityManager: Repository<Teste> = getRepository(Teste);
  const result: Teste = await entityManager.findOne({cdTeste: Number(req.params.id)});

  res.status(200).send(result).end();
}

export async function deleteEntity(req: Request, res: Response) {

  // EntityManager
  const entityManager: Repository<Teste> = getRepository(Teste);
  await entityManager.delete({cdTeste: Number(req.params.id)});

  res.status(204).end();
}
