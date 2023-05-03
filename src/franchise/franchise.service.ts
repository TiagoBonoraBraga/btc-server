import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { Prisma, Franchise } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateFranchiseDto } from './dto/create-franchise.dto';
import { UpdateFranchiseDto } from './dto/update-franchise.dto';

@Injectable()
export class FranchiseService {
    constructor(private readonly prisma: PrismaService) { }

    async findAll(): Promise<Franchise[]> {
        return this.prisma.franchise.findMany();
    }

    async findById(id: string): Promise<Franchise> {
        const record = await this.prisma.franchise.findUnique({
            where: { id },
        });
        if (!record) {
            throw new NotFoundException(`registro com o '${id}' não encontrado.`)
        }
        return record
    }

    async findOne(id: string): Promise<Franchise> {
        return this.findById(id);
    }

    async create(franchise: CreateFranchiseDto): Promise<Franchise> {
        try {
            const createFranchise = await this.prisma.franchise.create({ data: franchise });
            return createFranchise;
        } catch (error) {
            if (error) {
                // erro de validação dos dados de entrada
                throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
            } else if (error instanceof Prisma.PrismaClientKnownRequestError) {
                if (error.code === 'P2002') {
                    // 409 (Conflito) indica que já existe um registro com a chave primária especificada
                    throw new HttpException(`Já existe um cliente com o nome '${franchise.email}'.`, HttpStatus.CONFLICT);
                }
            }
            // 500 (Erro interno do servidor) é usado como um fallback para erros desconhecidos
            //throw new HttpException('Erro interno do servidor', HttpStatus.INTERNAL_SERVER_ERROR);

            return error.message
        }
    }

    update(id: string, updateFranchiseDto: UpdateFranchiseDto) {
        return `This action updates a #${id} franchise`;
    }

    remove(id: string) {
        return `This action removes a #${id} franchise`;
    }
}
