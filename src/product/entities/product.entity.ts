import { Client } from "@prisma/client";

export class Product {
    id?: string;
    name: string;
    description: string;
    commission: number;
    score: number;
    price: number;
    idClient: Client[];
    createdAt?: Date;
    updatedAt?: Date;
}
