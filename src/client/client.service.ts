import { HttpException, HttpStatus, Injectable, NotFoundException } from "@nestjs/common";
import { Client, Prisma } from "@prisma/client";
import { v4 as uuidv4 } from 'uuid';
import * as yup from 'yup';
import { PrismaService } from "../prisma/prisma.service";
import { CreateClientDto } from "./dto/create-client.dto";


const clientSchema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup.string().matches(/^\d{11}$/).required(),
    cpf: yup.string().matches(/^\d{11}$/).required(),
});

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
    async create(dataClient: CreateClientDto): Promise<Client> {
        try {
            await clientSchema.validate(dataClient);

            const id = uuidv4();
            const clientData = { ...dataClient, id };
            const client = await this.prisma.client.create({ data: clientData });

            return client;
        } catch (error) {
            // if (error instanceof yup.ValidationError) {
            //     // erro de validação dos dados de entrada
            //     throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
            // } else if (error instanceof Prisma.PrismaClientKnownRequestError) {
            //     if (error.code === 'P2002') {
            //         // 409 (Conflito) indica que já existe um registro com a chave primária especificada
            //         throw new HttpException(`Já existe um cliente com o email '${data.email}'.`, HttpStatus.CONFLICT);
            //     }
            // }
            // 500 (Erro interno do servidor) é usado como um fallback para erros desconhecidos
            //throw new HttpException('Erro interno do servidor', HttpStatus.INTERNAL_SERVER_ERROR);
            
            return error.message
        }
    }

    async update(id: string, data: CreateClientDto): Promise<Client> {

        try {
            const client = await this.prisma.client.update({
                where: { id },
                data,
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