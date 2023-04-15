import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Hiper Local')
    .setDescription('Api para franqueados')
    .setVersion('1.0')
    .addTag('Franqueado')
    .addTag('Clientes')
    .addTag('Produtos')
    .build()
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document)


  await app.listen(3333);
}
bootstrap();
