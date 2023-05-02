import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
    constructor(private readonly prisma: PrismaService) { }

    async findAll(): Promise<User[]> {
        return this.prisma.user.findMany();
    }

    async findById(id: string): Promise<User> {
        const record = await this.prisma.user.findUnique({
            where: { id },
        });
        if (!record) {
            throw new NotFoundException(`registro com o '${id}' não encontrado.`)
        }
        return record
    }

    async findOne(id: string): Promise<User> {
        return this.findById(id);
    }

    async create(user: CreateUserDto): Promise<User> {
        try {
            const createUser = await this.prisma.user.create({ data: user });
            return createUser;
        } catch (error) {
            if (error) {
                // erro de validação dos dados de entrada
                throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
            } else if (error instanceof Prisma.PrismaClientKnownRequestError) {
                if (error.code === 'P2002') {
                    // 409 (Conflito) indica que já existe um registro com a chave primária especificada
                    throw new HttpException(`Já existe um cliente com o nome '${client.email}'.`, HttpStatus.CONFLICT);
                }
            }
            // 500 (Erro interno do servidor) é usado como um fallback para erros desconhecidos
            //throw new HttpException('Erro interno do servidor', HttpStatus.INTERNAL_SERVER_ERROR);

            return error.message
        }
    }

    update(id: string, updateUserDto: UpdateUserDto) {
        return `This action updates a #${id} user`;
    }

    remove(id: string) {
        return `This action removes a #${id} user`;
    }
}
