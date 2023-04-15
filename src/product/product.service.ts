import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Product } from '@prisma/client';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<Product[]> {
    return this.prisma.product.findMany();
  }

  async findById(id: string): Promise<Product> {
    const record = await this.prisma.product.findUnique({
      where: { id },
    });
    if (!record) {
      throw new NotFoundException(`Registro com o '${id}' não encontrado.`)
    }
    return record
  }

  async findOne(id: string): Promise<Product> {
    return this.findById(id);
  }

  async create(data: CreateProductDto): Promise<Product> {
    return this.prisma.product.create({ data });
  }

  async update(id: string, dto: CreateProductDto): Promise<Product> {
    await this.findById(id)

    const data:Partial<Product>={...dto};
    return this.prisma.product.update({
      where: { id },
      data,
    });
  }

  async delete(id: string): Promise<Product> {
    return this.prisma.product.delete({
      where: { id },
    });
  }
}
