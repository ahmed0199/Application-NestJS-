import { Controller, Get } from '@nestjs/common';
import { PhareService } from './phare.service';

@Controller('phare')
export class PhareController {
  constructor(private readonly service: PhareService) {}

  @Get('on')
  on(): { message: string } {
    return { message: this.service.allumer() };
  }
}
