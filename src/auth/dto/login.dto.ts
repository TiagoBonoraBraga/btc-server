import { ApiProduces, ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class LoginDto {
   @IsString()
   @IsNotEmpty()
   @ApiProperty({
    description: 'email para login',
    example: 'email@email.com'
   })
    email: string ;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
     description: 'senha do usuario ou do Admin',
     example: 'senha123'
    })
    password: string;

}