"use strict";

import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({name: "TESTE"})
export class Teste {

  @PrimaryGeneratedColumn({name: "CD_TESTE"})
  public cdTeste: number;
  @Column({name: "DS_TESTE"})
  public dsTeste: string;
  @Column({name: "DT_TESTE"})
  public dtTeste: Date;

  constructor(cdTeste?: number,
              dsTeste?: string,
              dtTeste?: Date) {
    this.cdTeste = cdTeste;
    this.dsTeste = dsTeste;
    this.dtTeste = dtTeste;
  }
}
