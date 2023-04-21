import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreateClientDto } from "./dto/create-client.dto";
import { Client } from "@prisma/client";

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
    async create(data: CreateClientDto): Promise<Client> {
        const existingClient = await this.prisma.client.findUnique({ where: { name: data.name } });
        if (existingClient) {
            throw new Error(`Já existe um cliente com o nome '${data.name}'.`);
        }

        const client = await this.prisma.client.create({ data });

        return client;
    }

    async update(id: string, data: CreateClientDto): Promise<Client> {
        const existingClient = await this.prisma.client.findUnique({ where: { name: data.name, } });
        if (existingClient) {
            throw new Error(`Já existe um cliente com o nome '${data.name}'.`);
        }

        const client = await this.prisma.client.update({
            where: { id },
            data,
        });


        return client;
    }


    async delete(id: string): Promise<Client> {
        return this.prisma.client.delete({ where: { id } });
    }

}