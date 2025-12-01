import { UsersService } from './users.service';
import { Body, Controller, Get, Param, Post, Query, Put, Delete, Headers, Injectable, Patch } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { ObjectId } from 'typeorm';
import { UpdateUserDto } from './dto/update-user.dto';
@Injectable()
@Controller('users')
export class UsersController {
  constructor(private readonly UsersService: UsersService) { }
  @Post()
  create(@Body() data) {
    return this.UsersService.create(data.email, data.password, data.active);
  }

  @Get()
  findAll() {
    return this.UsersService.findAll();
  }

  @Get("/active")
  findActive() {
    return this.UsersService.findActive();

  }

  //@Get('/find/:id')
  // findOneById(@Param('id') id: ObjectId) {
  //    return this.UsersService.findOneById(id);
  // }


  @Get('/email/:email')
  findOneByEmail(@Param('email') email: string) {
    return this.UsersService.findOneByEmail(email);
  }

  @Patch('/edit/:id')
  updateuser (@Param('id') id:ObjectId, @Body()attrs:UpdateUserDto) {
    return this.UsersService.update(id ,attrs)
  }

  @Delete('supprimer/:id')
supprimer (@Param('id') id :ObjectId){
   this.UsersService.supprimer(id)
return{message:'supprimé avec succée'}
}



  //  users = [
  //{ id: 1, username: 'Mohamed', email: 'mohamed@esprit.tn', status: 'active' },
  //{ id: 2, username: 'Sarra', email: 'sarra@esprit.tn', status: 'inactive' },
  //{ id: 3, username: 'Ali', email: 'ali@esprit.tn', status: 'inactive' },
  //{ id: 4, username: 'Eya', email: 'eya@esprit.tn', status: 'active' },
  //]
  //@Get()
  //getAllUsers(@Query('status') status:String){
  //    if(status){
  //        return this.users.filter(user => user.status === status)
  //    }
  //http://localhost:3000/users?status=active
  //    return this.users;
  //}
  //@Get("/:id")
  //getUserById(@Param('id') id:Number){
  //  return this.users.find(user => user.id === Number(id))
  //http://localhost:3000/users/1
  //}

  //@Post()
  //addUser(@Body() data: any) {
  //  const lastId = this.users.length > 0 ? Math.max(...this.users.map(u => u.id)) : 0;

  //  const newUser = {
  //    id: lastId + 1,
  //    username: data.username,
  //    email: data.email,
  //    status: data.status || 'inactive', // valeur par défaut
  //  };

  //  this.users.push(newUser);

  //  return newUser;
  //}


  //@Post()
  //   addUser(@Body() data: CreateUserDto, @Headers('authorization') auth: string) {
  //   const lastId = Math.max(...this.users.map(u => u.id));

  //  const newUser = {
  //       id: lastId + 1,
  //  ...data,
  //  };

  //    this.users.push(newUser);

  //    return {
  //  //        message: 'Utilisateur ajouté',
  //    authorization: auth || 'Aucun header Authorization reçu',
  //    user: newUser
  // };
  // }



  //@Put(':id')
  // updateUser(@Param('id') id: number, @Body() data: CreateUserDto) {
  //    const index = this.users.findIndex(u => u.id === id);

  //   if (index === -1) {
  //       return { message: `Utilisateur avec ID ${id} introuvable.` };
  //  }

  // this.users[index] = { id, ...data };

  // return {
  //     message: 'Utilisateur mis à jour avec succès',
  //     user: this.users[index]
  // };
  //}

  //@Delete(':id')
  //deleteUser(@Param('id') id: number) {
  // const index = this.users.findIndex(u => u.id === id);

  // if (index === -1) {
  //     return { message: `Utilisateur avec ID ${id} introuvable.` };
  // }

  // const deleted = this.users.splice(index, 1);

  // return {
  //     message: 'Utilisateur supprimé',
  //     deleted: deleted[0]
  //  };
  // }

  //@Get('/active/:status')
  // getActiveUsers(@Param('status') status: string) {
  //     return this.users.filter(user => user.status === status);
  // }





}
