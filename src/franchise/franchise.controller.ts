import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Franchise } from '@prisma/client';
import { CreateFranchiseDto } from './dto/create-franchise.dto';
import { UpdateFranchiseDto } from './dto/update-franchise.dto';
import { FranchiseService } from './franchise.service';

@ApiTags('franchise')
@Controller('franchise')
export class FranchiseController {
  constructor(private readonly franchiseService: FranchiseService) {}

  @Get()
  @ApiOperation({
    summary: "Listar todos os Franquiado"
  })
  async findAll(): Promise<Franchise[]> {
    return await this.franchiseService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: "Visualizar franquiado por ID"
  })
  async findOne(@Param('id') id: string): Promise<Franchise> {
    return await this.franchiseService.findOne(id);
  }

  @Post()
  @ApiOperation({
    summary: "Criar um franquiado"
  })
 async create(@Body() createFranchiseDto: CreateFranchiseDto): Promise<Franchise> {
    return await this.franchiseService.create(createFranchiseDto);
  }

  @Patch(':id')
  @ApiOperation({
    summary: "Editar um franquiado pelo ID"
  })
 async update(@Param('id') id: string, @Body() data: UpdateFranchiseDto): Promise<Franchise> {
    return await this.franchiseService.update(id, data);
  }

  @Delete(':id')
  @ApiOperation({
    summary: "Deletar um franquiado pelo ID"
  })
 async delete(@Param('id') id: string) {
    return await this.franchiseService.delete(id);
  }
}
