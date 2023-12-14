import { PartialType } from '@nestjs/mapped-types';
import { CreateAutorDto } from './create-autor.dto';
import { IsArray, IsDate, IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';

export class UpdateAutorDto extends PartialType(CreateAutorDto) {
    @IsOptional()
    @IsString({ message: 'El nombre debe ser una cadena de texto' })
    @MaxLength(50, { message: 'El nombre no puede tener más de 50 caracteres' })
    Nombre?: string;
  
    @IsOptional()
    @IsString({ message: 'La fecha de publicación debe ser una fecha válida' })
    fechaNacimiento?: string;

    @IsString({each:true})
    @IsArray()
    @IsOptional()
    listaBooks?: string[];
}
