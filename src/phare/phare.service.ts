import { Injectable } from '@nestjs/common';
import { PhareRepository } from './phare.repository';

@Injectable()
export class PhareService {
  constructor(private readonly repo: PhareRepository) {}

  allumer(): string {
    return this.repo.turnOn();
  }
}
