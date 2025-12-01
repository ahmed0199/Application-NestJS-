import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'Le username est obligatoire.' })
  username: string;

  @IsEmail({}, { message: 'Email invalide.' })
  email: string;

  @IsNotEmpty({ message: 'Le statut est obligatoire.' })
  active: boolean;
}
