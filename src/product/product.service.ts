import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { Prisma, Product } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';





@Injectable()
export class ProductService {
    constructor(private readonly prisma: PrismaService) { }


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

    async create(product: CreateProductDto): Promise<Product> {
        try {
            const createProduct = await this.prisma.product.create({
                data: product
            });

            return createProduct;
        } catch (error) {
            console.log(error.message)
            if (error instanceof Prisma.PrismaClientKnownRequestError) {
                if (error.code === 'P2002') {
                    // 409 (Conflito) indica que já existe um registro com a chave primária especificada
                    throw new HttpException(`Já existe um produto com o nome '${product.name}'.`, HttpStatus.CONFLICT);
                }
            }
            // 500 (Erro interno do servidor) é usado como um fallback para erros desconhecidos
            //throw new HttpException('Erro interno do servidor', HttpStatus.INTERNAL_SERVER_ERROR);
            return error.message
        }
    }


    async update(id: string, data: CreateProductDto): Promise<Product> {
        try {
            const product = await this.prisma.product.update({
                where: { id },
                data
            });

            return product;
        } catch (error) {
            if (error instanceof Prisma.PrismaClientKnownRequestError) {
                if (error.code === 'P2002') {
                    // 409 (Conflito) indica que já existe um registro com a chave primária especificada
                    throw new HttpException(`Já existe um produto com o nome '${data.name}'.`, HttpStatus.CONFLICT);
                }
            }
            // 500 (Erro interno do servidor) é usado como um fallback para erros desconhecidos
            throw new HttpException('Erro interno do servidor', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async delete(id: string): Promise<Product> {
        return this.prisma.product.delete({
            where: { id },
        });
    }
}
