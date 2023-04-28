import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { PrismaModule } from './prisma/prisma.module';
import { ClientModule } from './client/client.module';
import { AuthModule } from './auth/auth.module';



@Module({
  imports: [ProductModule, ClientModule, PrismaModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
