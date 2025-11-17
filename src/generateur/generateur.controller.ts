import { Controller, Get } from '@nestjs/common';
import { GenerateurService } from './generateur.service';

@Controller('generateur')
export class GenerateurController {
  constructor(private readonly service: GenerateurService) {}

  @Get()
  generer(): { message: string } {
    return { message: this.service.generer() };
  }
}
