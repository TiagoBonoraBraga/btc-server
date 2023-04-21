import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsUUID } from "class-validator";

export class CreateClientDto {
    @IsUUID()
    @ApiProperty({
        description: "Id do cliente",
        example: 1
    })
    id: string;

    @IsString()
    @ApiProperty({
        description: 'ID do Sistema'

    })
    idSystem: string;

    @IsString()
    @ApiProperty({
        description: 'nome do cliente',
        example: 'Felipe Cristo'
    })
    name: string;

    @IsString()
    @ApiProperty({
        description: 'ID da Franquia'

    })
    idFranchise: string;

}

