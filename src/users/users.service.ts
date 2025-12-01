import { Injectable, InternalServerErrorException, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./users.entity";
import { MongoRepository, Repository } from "typeorm";
import { ObjectId } from 'mongodb';
import { promises } from "dns";


@Injectable()
export class UsersService {

    constructor(@InjectRepository(User) private userRepository: MongoRepository<User>) { }

    async create(email: string, password: string, active: boolean): Promise<User> {
        try {
            const user = this.userRepository.create({ email, password, active })
            await this.userRepository.save(user);
            return user;
        } catch (error) {
            console.error("erreur lors de la création:", error);
            throw new InternalServerErrorException("errur");
        };



    }
    async findAll(): Promise<User[]> {
        return this.userRepository.find();
    }
    async findOneById(id: ObjectId): Promise<User> {
        try {
            const user = await this.userRepository.findOneBy(id)
                ;
            if (!user) {
                throw new NotFoundException('Utilisateur introuvable');
            }
            return user
        }
        catch (error) {
            console.error("erreur lors de la création:", error);
            throw new InternalServerErrorException("errur");
        }




    }
    async findOneByEmail(email: string): Promise<User> {
        try {
            const user = await this.userRepository.findOneBy(
                { email }
            );

            if (!user) {
                throw new NotFoundException('Utilisateur introuvable');

            }
            return user;
        }
        catch (error) {
            console.error("erreur lors de la création:", error);
            throw new InternalServerErrorException("errur");
        }

    }
    async findActive(): Promise<User[]> {
        try {
            const user = await this.userRepository.find(
                { where: { active: true } })
            if (user.length === 0) {
                throw new NotFoundException('Utilisateur introuvable');

            }
            return user;



        }
        catch (error) {
            console.error("erreur :", error);
            throw new InternalServerErrorException("errur");
        }


    }
    async update(id: ObjectId, attrs: Partial<User>): Promise<User> {
        try {
            const user = await this.findOneById(id)
            Object.assign(user, attrs)
            await this.userRepository.save(user)
            return user
        }
        catch (error) {
            console.error("erreur :", error);
            throw new InternalServerErrorException("errur");
        }
    }
    async supprimer(id: ObjectId): Promise<void> {
        try {
            const user = await this.findOneById(id)
            await this.userRepository.delete(id)

        }
        catch (error) {
            console.error("erreur :", error);
            throw new InternalServerErrorException("errur");
        }
    }



}