import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { Product } from '@prisma/client';
import { ProductService } from './product.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateProductDto } from './dto/create-product.dto';

@ApiTags('product')
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) { }

  @Get()
  @ApiOperation({
    summary: "Listar todos os produtos"
  })
  async findAll(): Promise<Product[]> {
    return await this.productService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: "Visualizar produtos por ID"
  })
  async findOne(@Param('id') id: string): Promise<Product> {
    return await this.productService.findOne(id);
  }

  @Post()
  @ApiOperation({
    summary: "Criar um produtos"
  })
  async create(@Body() data: CreateProductDto): Promise<Product> {
    return await this.productService.create(data);
  }

  @Patch(':id')
  @ApiOperation({
    summary: "Atualizar produtos pelo ID"
  })
  async update(
    @Param('id') id: string,
    @Body() data: CreateProductDto,
  ): Promise<Product> {
    return await this.productService.update(id, data);
  }

  @Delete(':id')
  @ApiOperation({
    summary: "Deletar produtos pelo Id"
  })
  async delete(@Param('id') id: string) {
    return await this.productService.delete(id);
  }
}