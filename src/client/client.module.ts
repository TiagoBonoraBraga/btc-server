import { Module } from "@nestjs/common";
import { PrismaModule } from "src/prisma/prisma.module";
import { PrismaService } from "src/prisma/prisma.service";
import { ClientController } from "./client.controller";
import { ClientService } from "./client.service";



@Module({
    imports: [PrismaModule],
    controllers: [ClientController],
    providers: [ClientService, PrismaService],
})
export class ClientModule {}
