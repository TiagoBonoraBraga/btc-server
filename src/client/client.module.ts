import { Module } from "@nestjs/common";
import { PrismaModule } from "src/prisma/prisma.module";
import { ClientController } from "./client.controller";
import { ClientService } from "./client.service";



@Module({
    imports: [PrismaModule],
    controllers: [ClientController],
    providers: [ClientService],
})
export class ClientModule {}
