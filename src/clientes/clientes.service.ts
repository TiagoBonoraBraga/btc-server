import { Injectable } from "@nestjs/common";
import { CreateClientesDto } from "./dto/create-cliente.dto";
import { Cliente } from "./entities/clientes.entity";

@Injectable()
export class ClientesService{
    clientes: Cliente[] = []

    findAll() {
        return this.clientes;
    }

    findById() {
        return 'buscar clientes por ID';
    }
    remove() {
        return 'Deletar Cliente';
    }
    updade() {
        return 'Editar cliente';
    }
    create(createClientesDto: CreateClientesDto ) {
        const cliente: Cliente = { id: 'random_id',...createClientesDto}
        
        this.clientes.push(cliente);
        
        
        return cliente;
    }
    


}