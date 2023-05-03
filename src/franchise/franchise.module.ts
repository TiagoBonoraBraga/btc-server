import { FranchiseService } from './franchise.service';
import { FranchiseController } from './franchise.controller';
import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
    imports: [PrismaModule],
    controllers: [FranchiseController],
    providers: [FranchiseService]
})
export class FranchiseModule { }
