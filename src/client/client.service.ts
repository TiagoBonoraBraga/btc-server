import { HttpException, HttpStatus, Injectable, NotFoundException } from "@nestjs/common";
import { Client, Prisma } from "@prisma/client";
import * as yup from 'yup';
import { PrismaService } from "../prisma/prisma.service";
import { CreateClientDto } from "./dto/create-client.dto";


@Injectable()
export class ClientService {
    constructor(private readonly prisma: PrismaService) { }

    async findAll(): Promise<Client[]> {
        return this.prisma.client.findMany();
    }

    async findById(id: string): Promise<Client> {
        const record = await this.prisma.client.findUnique({
            where: { id },
        });
        if (!record) {
            throw new NotFoundException(`Registro com o '${id}' não encontrado.`)
        }
        return record
    }

    async findOne(id: string): Promise<Client> {
        return this.findById(id);
    }
    async create(client: CreateClientDto): Promise<Client> {
        try {
            const { idFranchise, ...Client } = client;
            const createClient = await this.prisma.client.create({
                data: {
                    ...Client,
                    idFranchise: { connect: { id: idFranchise } }, // aqui estamos conectando o id da franquia ao cliente
                },
            });

            return createClient;
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

    async update(id: string, data: CreateClientDto): Promise<Client> {

        try {
            const { idFranchise, ...Client } = data;
            const client = await this.prisma.client.update({
                where: { id },
                data: {
                    ...Client,
                    idFranchise: { connect: { id: idFranchise } }, // aqui estamos conectando o id da franquia ao cliente
                },
            });


            return client;
        } catch (error) {
            if (error instanceof yup.ValidationError) {
                // erro de validação dos dados de entrada
                throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
            } else if (error instanceof Prisma.PrismaClientKnownRequestError) {
                if (error.code === 'P2002') {
                    // 409 (Conflito) indica que já existe um registro com a chave primária especificada
                    throw new HttpException(`Já existe um cliente com o email '${data.email}'.`, HttpStatus.CONFLICT);
                }
            }
            // 500 (Erro interno do servidor) é usado como um fallback para erros desconhecidos
            throw new HttpException('Erro interno do servidor', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    async delete(id: string): Promise<Client> {
        return this.prisma.client.delete({ where: { id } });
    }

}