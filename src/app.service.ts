import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Api para criação de ADMIN, FRANQUIADO, CLIENTE e PRODUTOS';
  }
}
