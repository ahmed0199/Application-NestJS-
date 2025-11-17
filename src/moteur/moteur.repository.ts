import { Injectable } from '@nestjs/common';

@Injectable()
export class MoteurRepository {
  private running = false;

  start(): string {
    this.running = true;
    return 'Moteur démarré';
  }

  getStatus(): string {
    return this.running ? 'En marche' : 'Arrêté';
  }
}
