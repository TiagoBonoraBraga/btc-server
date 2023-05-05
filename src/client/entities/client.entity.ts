import { Franchise, Product } from "@prisma/client";

export class Client {
    id?: string;
    name: string;
    email: string;
    phone: string;
    cpf?: string;
    cnpj?: string;
    idFranchise?: Franchise;
    idProduct?: Product;
    createdAt?: Date;
    updatedAt?: Date;

}