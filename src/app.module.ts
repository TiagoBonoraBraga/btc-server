import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { PrismaModule } from './prisma/prisma.module';
import { ClientModule } from './client/client.module';
import { FranchiseModule } from './franchise/franchise.module';



@Module({
  imports: [ProductModule, ClientModule, PrismaModule, FranchiseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
