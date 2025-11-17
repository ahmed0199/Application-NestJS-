import { Injectable } from '@nestjs/common';
import { MoteurService } from '../moteur/moteur.service';
import { GenerateurService } from '../generateur/generateur.service';
import { PhareService } from '../phare/phare.service';
import { AudioService } from '../audio/audio.service';

@Injectable()
export class VehiculeService {
  constructor(
    private readonly moteur: MoteurService,
    private readonly generateur: GenerateurService,
    private readonly phare: PhareService,
    private readonly audio: AudioService,
  ) {}

  operate() {
    const m = this.moteur.demarrer();
    const g = this.generateur.generer();
    const p = this.phare.allumer();
    const a = this.audio.play();

    return {
      moteur: m,
      generateur: g,
      phare: p,
      audio: a,
    };
  }
}
