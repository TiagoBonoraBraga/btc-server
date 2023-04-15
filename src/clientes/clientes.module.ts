import { Module } from "@nestjs/common";
import { ClientesController } from "./clientes.controller";
import { ClientesService } from "./clientes.service";
import { PrismaModule } from "src/prisma/prisma.module";



@Module({
    imports: [PrismaModule],
    controllers: [ClientesController],
    providers: [ClientesService],
})
export class ClientesModule {}
