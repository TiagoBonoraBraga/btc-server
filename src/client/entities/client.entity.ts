import { Franchise, Product } from "@prisma/client";

export class Client {
    id?: string;
    name: string;
    email: string;
    phone: string;
    cpf?: string;
    cnpj?: string;
    idFranchise: Franchise;
    products: Product[];
    createdAt?: Date;
    updatedAt?: Date;

}