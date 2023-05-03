import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { PrismaService } from "src/prisma/prisma.service";
import { LoginResponseDto } from "./dto/login-response.dto";
import { LoginDto } from "./dto/login.dto";
import * as bcrypt from "bcrypt";


@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService
  ) {}

 /* async login(email: string, password: string): Promise<LoginDto> {
    const user = await this.prisma.user.findUnique({ where: { email } });*/
  async login(loginDto: LoginDto): Promise<LoginResponseDto> {
    const { email, password } = loginDto;

    // Procura e checa se o user existe, usando o email
    const user = await this.prisma.user.findUnique({ where: { email } });

    if (!user) {
      throw new UnauthorizedException("Usuário e/ou senha inválidos");
    }

    // Valida se a senha informada é correta
    const isHashValid = await bcrypt.compare(password, user.password);

    if (!isHashValid) {
      throw new UnauthorizedException("Usuário e/ou senha inválidos");
    }

    delete user.password;

    return {
      token: this.jwtService.sign({ email }),
      user
    };
  }
}