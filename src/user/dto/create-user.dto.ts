import { IsEmail, IsNumber, IsString} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @IsEmail()
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

  @ApiProperty({
    description: "A confirmação da senha deve ser igual a senha",
    example: "Senha123"
  })
  confirmPassword: string;
}
