import { ApiProperty } from "@nestjs/swagger"
import { IsNumber, IsString } from "class-validator"

export class CreateProductDto {

    @IsString()
    @ApiProperty({
        description:"Nome do produto",
        example:"Sistema de NFe"
    })
    name: string

    @IsString()
    @ApiProperty({
        description:"Descriçao do produto",
        example:"Sistema para criar Nota fiscal"
    })
    description: string
    
    @IsNumber()
    @ApiProperty({
        description:"score do produto",
        example:20
    })
    score: number
}
