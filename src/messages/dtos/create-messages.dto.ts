import { IsString } from "class-validator"
import { IsNumber } from "class-validator"


export class CreateMessageDto{
@IsString()
nom:string
@IsString()
prenom:string
@IsNumber()
age:number
}