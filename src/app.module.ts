import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// Modules importés (ils doivent être listés dans les 'imports')
import { MoteurModule } from './moteur/moteur.module';
import { GenerateurModule } from './generateur/generateur.module';
import { PhareModule } from './phare/phare.module';
import { AudioModule } from './audio/audio.module';
import { VehiculeModule } from './vehicule/vehicule.module';
import { MessagesModule } from './messages/messages.module';
import { Message } from './messages/messages.entity';

// Manquait l'import des classes AppController et AppService
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './users/users.entity';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    // Configuration de la connexion MongoDB avec TypeORM
    TypeOrmModule.forRoot({
      type: 'mongodb', // Déclare que c'est MongoDB
      host: 'localhost', // L'adresse de ton serveur MongoDB
      port: 27017, // Le port de MongoDB
      database: 'AhmedNestJs', // Nom de la base de données
      entities: [Message, User], // Liste des entités (à remplir avec vos entités TypeORM)
      synchronize: true, // Synchroniser les entités avec la BD (Attention en production !)
      
    }),
   

    // Modules de l'application
    MoteurModule,
    GenerateurModule,
    PhareModule,
    AudioModule,
    VehiculeModule,
    MessagesModule,
    UsersModule,
  ],
  controllers: [AppController], // Contrôleurs de ce module
  providers: [AppService], // Services/Providers de ce module
})
export class AppModule {}