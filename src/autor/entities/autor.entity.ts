import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Book } from "./book.entity";

@Entity()
export class Autor {
    @PrimaryGeneratedColumn('identity')
  id: number;

  @Column('varchar')
  Nombre: string;

  @Column('varchar')
  fechaNacimiento: string;

@OneToMany(
  ()=>Book,
  (books)=>books.autor,
  {
    cascade:true,
    eager:true
  }

)

  listaBooks?:Book[]



}
