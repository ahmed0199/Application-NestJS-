import { MessagesService } from './messages.service';
import { Body, Controller, Get, Injectable, Param, Post } from '@nestjs/common';
@Injectable()
@Controller('messages')
export class MessagesController {
    constructor(private readonly MessagesService:MessagesService){}

@Get()
alllistMessages(){ 
    return this.MessagesService.findAll()
}

    


@Get()
listMessages(){ }
@Get("/:id")
getMessage(@Param("id") id: string) {
console.log(id);
}
@Post()
createMessage(@Body() body: any) {
console.log(body);
}}
