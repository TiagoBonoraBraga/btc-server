import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsUUID } from "class-validator";

export class CreateClientDto {
    @IsUUID()
    id: string;

    @IsString()
    @ApiProperty({
        description: 'ID da Franquia'

    })
    idFranchise: string;

    @IsString()
    @ApiProperty({
        description: 'nome do cliente',
        example: 'Felipe Cristo'
    })
    name: string;

    @IsString()
    @ApiProperty({
        description: 'E-mail do cliente',
        example: 'felipecristo@hiperlocal.com'
    })
    email: string;

    @IsString()
    @ApiProperty({
        description: 'Numero de contato do cliente',
        example: '62912345678'
    })
    phone: string;

    @IsString()
    @ApiProperty({
        description: 'CPF do cliente',
        example: '12345678910'
    })
    cpf: string;
}

