import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ClientesService } from "./clientes.service";
import { CreateClientesDto, } from "./dto/create-cliente.dto";
import { ApiTags, ApiParam } from "@nestjs/swagger";

@ApiTags('Clientes')
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

    @Delete(':id')
  @ApiParam({
    name: 'id',
    required: true,
    type: 'number',
  })
  remove(@Param('id') id) {
    id = parseInt(id);
    return this.clientesService.remove(id);
  }

}