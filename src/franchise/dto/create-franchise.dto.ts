import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateFranchiseDto {
    @IsString()
    @ApiProperty({
        description: "Nome do usuario",
        example: "carlos eduardo"
    })
    name: string

    @IsString()
    @ApiProperty({
        description: "E-mail do usuario",
        example: "carlos-eduardo@hiperlocal.com"
    })
    email: string

    @IsString()
    @ApiProperty({
        description: "Endereço do usuario do usuario",
        example: "Rua: A, Bairro: Jardim Santa paula, N°: 000, Cidade: Petrilina de Goias"
    })
    address: string

    @IsString()
    @ApiProperty({
        description: "senha do usuario",
        example: "Abcd@123"
    })
    password: string

    @IsString()
    @ApiProperty({
        description: "CPF do usuario",
        example: "12345678910"
    })
    cpf: string

    @IsString()
    @ApiProperty({
        description: "CNPJ do usuario",
        example: "123456789123"
    })
    cnpj: string
}
