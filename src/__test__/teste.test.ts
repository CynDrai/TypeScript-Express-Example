"use strict";

import request from "supertest";
import { Teste } from "../models/Teste";
import enviroment from "../services/enviroment";

// Variável utilizada de base
let globalTeste: Teste = new Teste();

describe("# Testes de Rota da Entidade #'Teste'", () => {

  it("Teste da rota teste/createOrUpdate", async () => {

    // new Entity
    const toApi: Teste = new Teste();
    toApi.dsTeste = "test API";
    toApi.dtTeste = new Date();

    const result = await request(enviroment.baseUrl).put("/teste/createOrUpdate").send(toApi);
    globalTeste = result.body;
    globalTeste.dtTeste = new Date(globalTeste.dtTeste);
    toApi.cdTeste = globalTeste.cdTeste;

    expect(globalTeste).toEqual({cdTeste: toApi.cdTeste,
                                 dsTeste: toApi.dsTeste,
                                 dtTeste: toApi.dtTeste});
  });

  it("Teste da rota teste/list", async () => {

    const result = await request(enviroment.baseUrl).get(`/teste/list`);
    const testList: Teste[] = result.body;
    expect(testList.length).toBeGreaterThanOrEqual(0);
  });

  it("Teste da rota teste/findById", async () => {

    const result = await request(enviroment.baseUrl).get("/teste/findById/" + globalTeste.cdTeste);
    const test: Teste  = result.body;
    test.dtTeste = new Date(test.dtTeste);

    expect(test).toEqual({cdTeste: globalTeste.cdTeste,
                          dsTeste: globalTeste.dsTeste,
                          dtTeste: globalTeste.dtTeste});
  });

  it("Teste da rota teste/delete", async () => {
    const result = await request(enviroment.baseUrl).delete("/teste/" + globalTeste.cdTeste);
    // Caso 204 -> Entidade Deletada com Sucesso
    expect(result.status).toBe(204);
  });
});
