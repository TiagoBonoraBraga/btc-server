import { Body, Controller, Delete, Get, Post, Put } from "@nestjs/common";
import { ClientesService } from "./clientes.service";
import { CreateClientesDto, } from "./dto/create-cliente.dto";

@Controller('clientes')
export class ClientesController {
    constructor (private clientesService: ClientesService){}

    @Get()
    findAll(){
        return this.clientesService.findAll();
    }

    @Get()
    findById(){
        return this.clientesService.findById()
    }

    @Post()
    create(@Body() createClientesDto : CreateClientesDto ){
        return this.clientesService.create(createClientesDto)

    }

    @Put()
    updade(){
        return this.clientesService.updade()
    }

    @Delete()
    remove(){
        return this.clientesService.remove()
    }

}