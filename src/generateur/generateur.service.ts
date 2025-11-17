import { Injectable } from '@nestjs/common';
import { GenerateurRepository } from './generateur.repository';

@Injectable()
export class GenerateurService {
  constructor(private readonly repo: GenerateurRepository) {}

  generer(): string {
    return this.repo.generatePower();
  }
}
