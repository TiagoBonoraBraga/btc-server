import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Product } from '@prisma/client';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaService) { }

  async findAll(): Promise<Product[]> {
    return this.prisma.product.findMany();
  }

  async findById(id: number): Promise<Product> {
    const record = await this.prisma.product.findUnique({
      where: { id },
    });
    if (!record) {
      throw new NotFoundException(`Registro com o '${id}' não encontrado.`)
    }
    return record
  }

  async findOne(id: number): Promise<Product> {
    return this.findById(id);
  }

  async create(data: CreateProductDto): Promise<Product> {
    const existingProduct = await this.prisma.product.findUnique({ where: { name: data.name } });
    if (existingProduct) {
      throw new Error(`Já existe um produto com o nome '${data.name}'.`);
    }

    const product = await this.prisma.product.create({ data });

    return product;
  }


  async update(id: number, data: CreateProductDto): Promise<Product> {
    const existingProduct = await this.prisma.product.findUnique({ where: { name: data.name, } });
    if (existingProduct && existingProduct.id !== id) {
      throw new Error(`Produto com nome '${data.name}' existente`);
    }

    const product = await this.prisma.product.update({
      where: { id },
      data,
    });

    return product;
  }

  async delete(id: number): Promise<Product> {
    return this.prisma.product.delete({
      where: { id },
    });
  }
}
