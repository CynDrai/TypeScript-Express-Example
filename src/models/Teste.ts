"use strict";

import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({name: "TESTE"})
export class Teste {

  @PrimaryGeneratedColumn({name: "CD_TESTE", type: "integer"})
  public cdTeste: number;
  @Column({name: "DS_TESTE", type: "varchar", precision: 200, nullable: true})
  public dsTeste: string;
  @Column({name: "DT_TESTE", type: "timestamp without time zone", nullable: true})
  public dtTeste: Date;

  constructor(cdTeste?: number,
              dsTeste?: string,
              dtTeste?: Date) {
    this.cdTeste = cdTeste;
    this.dsTeste = dsTeste;
    this.dtTeste = dtTeste;
  }
}
