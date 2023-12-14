import { IsArray, IsDate, IsNumber, IsOptional, IsString, MaxLength } from "class-validator";

export class CreateAutorDto {
    @IsNumber()
    id:number;
    @IsString({ message: 'El nombre debe ser una cadena de texto' })
    @MaxLength(50, { message: 'El nombre no puede tener más de 50 caracteres' })
    Nombre: string;
  
    @IsString({ message: 'La fecha de publicación debe ser una fecha válida' })
    fechaNacimiento: string;
    @IsString({each:true})
    @IsArray()
    @IsOptional()
    listaBooks?: string[];
}
