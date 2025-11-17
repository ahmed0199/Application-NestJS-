import { Injectable } from '@nestjs/common';
import { MoteurRepository } from './moteur.repository';

@Injectable()
export class MoteurService {
  constructor(private readonly moteurRepo: MoteurRepository) {}

  demarrer(): string {
    return this.moteurRepo.start();
  }

  status(): string {
    return this.moteurRepo.getStatus();
  }
}
