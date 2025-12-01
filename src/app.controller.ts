 // app.controller.ts
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service'; // Assurez-vous d'avoir aussi un fichier app.service.ts

@Controller()
export class AppController {
  // Le constructeur injecte l'AppService (NestJS le gère automatiquement)
  constructor(private readonly appService: AppService) {}

  // Cette méthode répondra aux requêtes HTTP GET sur la route racine (/)
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
