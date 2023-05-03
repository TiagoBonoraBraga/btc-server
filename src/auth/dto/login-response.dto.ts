import { ApiProperty } from "@nestjs/swagger";
import { User } from "@prisma/client";


export class LoginResponseDto{
    @ApiProperty({
        description: 'JWT gerado pelo login',
        example: 'TOKEN_GERADO_AUTOMATICAMENTE '
    })
    token: string;
    @ApiProperty({
        description: 'Dados do Usuario autenticado',
        example: 'TOKEN_GERADO_AUTOMATICAMENTE '
    })
    user: User;
}