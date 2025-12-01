import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Message } from './messages.entity';
@Injectable()
export class MessagesService {
constructor(@InjectRepository(Message) private messageRepository: Repository<Message>)
{}
async create(content: string, status: string): Promise<Message> {
try {
const message = this.messageRepository.create({ content, status, });
await this.messageRepository.save(message);
return message;
} catch (error) {
console.error("Error during save operation:", error);
throw new InternalServerErrorException("Failed to save the message");
}
}
findAll(){
    const list=this.messageRepository.find()
    return list
}
}