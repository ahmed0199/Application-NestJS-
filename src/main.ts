import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,         // ignore les champs non déclarés dans le DTO
      forbidNonWhitelisted: true, // erreur si champ interdit
      transform: true,         // transforme id en number automatiquement
    })
  );

  await app.listen(3000);
}
bootstrap();
