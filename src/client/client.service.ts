import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateClientDto } from "./dto/create-client.dto";
import { Client } from "./entities/client.entity";

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
    async create(createClientDto: CreateClientDto): Promise<Client> {
        const existingClient = await this.prisma.client.findUnique({ where: { name: createClientDto.name } });
        if (existingClient) {
            throw new Error(`Já existe um cliente com o nome '${createClientDto.name}'.`);
        }

        const client = await this.prisma.client.create({ createClientDto });

        return client;
    }

    async update(id: string, createClientDto: CreateClientDto): Promise<Client> {
        const existingClient = await this.prisma.client.findUnique({ where: { name: createClientDto.name, } });
        if (existingClient) {
            throw new Error(`Já existe um cliente com o nome '${createClientDto.name}'.`);
        }

        const client = await this.prisma.client.update({
            where: { id },
            createClientDto,
        });


        return client;
    }


    async delete(id: string): Promise<Client> {
        return this.prisma.client.delete({ where: { id } });
    }

}