import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';


async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.enableCors()
    const config = new DocumentBuilder()
        .setTitle('Hiper Local')
        .setDescription('Api para franqueados')
        .setVersion('1.0')
        .addTag('status')
        .addTag('auth')
        .addTag('franchise')
        .addTag('client')
        .addTag('product')
        .addBearerAuth()
        .build()
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document)


    await app.listen(process.env.PORT || 3333);
}
bootstrap();
