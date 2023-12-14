import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Autor } from "./autor.entity";
import { allowedNodeEnvironmentFlags } from "process";

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  titulo: string;


  @ManyToOne(
    ()=>Autor,
    (autor)=>autor.listaBooks
  )
 autor?:Autor
 
}