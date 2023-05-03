import { Client } from "@prisma/client"

export class Franchise {
    id?:string
    name:string
    email:string
    eddress:string
    password:string
    cpf?:string
    cnpj?:string
    clients: Client[]
    createdAt?:Date
    updatedAt?:Date
}
