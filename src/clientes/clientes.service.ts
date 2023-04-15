import { Injectable } from "@nestjs/common";
import { CreateClientesDto } from "./dto/create-cliente.dto";
import { Cliente } from "./entities/clientes.entity";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class ClientesService{
    clientes: Cliente[] = []
    constructor(private readonly prisma: PrismaService) {}

    findAll() {
        return this.prisma.clientes.findMany();
    }

    findById() {
        return 'buscar clientes por ID';
    }
    remove(id: string): Promise<Cliente> {
        return this.prisma.clientes.delete({ where: { id } });
    }
    updade() {
        return 'Editar cliente';
    }

    create(createClientesDto: CreateClientesDto ) {
        const cliente: Cliente = { id: 'random_id',...createClientesDto}
        
        return this.prisma.clientes.create({
            data: cliente,
        });
        
       
   }

 

}