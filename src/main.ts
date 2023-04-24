import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as cors from 'cors';
import { AppModule } from './app.module';


async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.use(cors())
    const config = new DocumentBuilder()
        .setTitle('Hiper Local')
        .setDescription('Api para franqueados')
        .setVersion('1.0')
        .addTag('status')
        .addTag('client')
        .addTag('product')
        .build()
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document)


    await app.listen(process.env.PORT || 3333);
}
bootstrap();
