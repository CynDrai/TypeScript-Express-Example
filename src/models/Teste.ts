"use strict";

export class Teste {
  public cdTeste: number;
  public dsTeste: string;
  public dtTeste: Date;

  constructor(cdTeste?: number,
              dsTeste?: string,
              dtTeste?: Date) {
    this.cdTeste = cdTeste;
    this.dsTeste = dsTeste;
    this.dtTeste = dtTeste;
  }
}
