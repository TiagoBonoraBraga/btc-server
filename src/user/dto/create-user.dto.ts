import { IsNumber, IsString} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @IsString()
  @ApiProperty({
    description: 'Email para Login',
    example: 'email@email.com',
  })
  email: string;

  @IsString()
  @ApiProperty({
      description: "Senha do Usuário",
      example: "Senha123"
  })
  password: string;

  @IsString()
  @ApiProperty({
      description: "Confirmar senha do Usuário",
      example: "Senha123"
  })
  confirmPassword: string;
}
