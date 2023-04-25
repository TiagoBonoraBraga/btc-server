import { ApiProperty } from "@nestjs/swagger"
import { IsNumber, IsString, IsUUID } from "class-validator"

export class CreateProductDto {
    // @IsNumber()
    // // @IsUUID()
    id: number

    @IsString()
    @ApiProperty({
        description: "Nome do Produto",
        example: "Sistema de NFe"
    })
    name: string

    @IsString()
    @ApiProperty({
        description: "Descriçao do produto",
        example: "Sistema para criar Nota fiscal"
    })
    description: string

    @IsNumber()
    @ApiProperty({
        description: "Comissão do Produto",
        example: 20
    })
    commission: number

    @IsNumber()
    @ApiProperty({
        description: "Score do produto",
        example: 200
    })
    score: number

    @IsNumber()
    @ApiProperty({
        description: "Valor do produto",
        example: 200
    })
    price: number
}
