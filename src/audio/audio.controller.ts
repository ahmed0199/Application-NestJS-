import { Controller, Get } from '@nestjs/common';
import { AudioService } from './audio.service';

@Controller('audio')
export class AudioController {
  constructor(private readonly service: AudioService) {}

  @Get('play')
  play(): { message: string } {
    return { message: this.service.play() };
  }
}
