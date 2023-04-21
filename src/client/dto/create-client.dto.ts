import { ApiProperty } from "@nestjs/swagger";

export class CreateClientDto {


    @ApiProperty({
        description: 'ID do Sistema'

    })
    idSystem: string;

    @ApiProperty({
        description: 'nome do cliente',
        example: 'Felipe Cristo'
    })
    name: string;

    @ApiProperty({
        description: 'ID da Franquia'

    })
    idFranchise: string;

    @ApiProperty({
        description: 'Data de quanto o cliente entrou',
        example: '28/09/1990'
    })
    createdAt: string;

    @ApiProperty({
        description: 'Data de quanto o cliente saiu',
        example: '24/04/2023'
    })
    updatedAt: string;

}

