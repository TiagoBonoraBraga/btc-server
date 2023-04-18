import { ApiProperty } from "@nestjs/swagger"
import { IsNumber, IsString, IsUUID } from "class-validator"

export class CreateProductDto {
    @IsUUID()
    @ApiProperty({
        description: "Id do produto",
        example: 1
    })
    id: number

    @IsString()
    @ApiProperty({
        description: "Nome do produto",
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
        description: "score do produto",
        example: 20
    })
    score: number
}
