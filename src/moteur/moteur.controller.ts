import { Controller, Get } from '@nestjs/common';
import { MoteurService } from './moteur.service';

@Controller('moteur')
export class MoteurController {
  constructor(private readonly moteurService: MoteurService) {}

  @Get('start')
  start(): { message: string } {
    const msg = this.moteurService.demarrer();
    return { message: msg };
  }

  @Get('status')
  status(): { status: string } {
    const s = this.moteurService.status();
    return { status: s };
  }
}
