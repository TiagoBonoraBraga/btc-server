import { ApiProperty } from "@nestjs/swagger";


export class LoginResponseDto{
    @ApiProperty({
        description: 'JWT gerado pelo login',
        example: 'TOKEN_GERADO_AUTOMATICAMENTE '
    })
    token: string;

    
}