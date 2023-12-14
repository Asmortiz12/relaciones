
import { IsString, IsNotEmpty } from 'class-validator';

export class BookDto {
  @IsNotEmpty({ message: 'El título del libro no puede estar vacío' })
  @IsString({ message: 'El título del libro debe ser una cadena de texto' })
  titulo: string;

}








