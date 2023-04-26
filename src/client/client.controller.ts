import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { ClientService } from "./client.service";
import { CreateClientDto, } from "./dto/create-client.dto";
import { Client } from "./entities/client.entity";

@ApiTags('client')
@Controller('client')
export class ClientController {
    constructor(private readonly clientService: ClientService) { }

    @Get()
    @ApiOperation({
        summary: "Listar todos os clientes"
    })
    async findAll(): Promise<Client[]> {
        return await this.clientService.findAll();
    }

    @Get(':id')
    @ApiOperation({
        summary: "Visualizar cliente por ID"
    })
    async findOne(@Param('id') id: string): Promise<Client> {
        return await this.clientService.findOne(id);
    }

    @Post()
    @ApiOperation({
        summary: "Criar um cliente"
    })
    async create(@Body() data: CreateClientDto): Promise<Client> {
        return await this.clientService.create(data);
    }

    @Put(':id')
    @ApiOperation({
        summary: "Atualizar dados do cliente pelo ID"
    })
    async update(
        @Param('id') id: string,
        @Body() data: CreateClientDto,
    ): Promise<Client> {
        return await this.clientService.update(id, data);
    }


    @Delete(':id')
    @ApiOperation({
      summary: "Deletar cliente pelo Id"
    })
    async delete(@Param('id') id: string) {
      return await this.clientService.delete(id);
    }
  
}