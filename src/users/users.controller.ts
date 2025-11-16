import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';

@Controller('users')
export class UsersController {
    users = [
{ id: 1, username: 'Mohamed', email: 'mohamed@esprit.tn', status: 'active' },
{ id: 2, username: 'Sarra', email: 'sarra@esprit.tn', status: 'inactive' },
{ id: 3, username: 'Ali', email: 'ali@esprit.tn', status: 'inactive' },
{ id: 4, username: 'Eya', email: 'eya@esprit.tn', status: 'active' },
]
@Get()
getAllUsers(@Query('status') status:String){
    if(status){
        return this.users.filter(user => user.status === status)
    }
//http://localhost:3000/users?status=active
    return this.users;
}
@Get("/:id")
getUserById(@Param('id') id:Number){
    return this.users.find(user => user.id === Number(id))
    //http://localhost:3000/users/1
}

@Post()
  addUser(@Body() data: any) {
    const lastId = this.users.length > 0 ? Math.max(...this.users.map(u => u.id)) : 0;

    const newUser = {
      id: lastId + 1,
      username: data.username,
      email: data.email,
      status: data.status || 'inactive', // valeur par défaut
    };

    this.users.push(newUser);

    return newUser;
  }

  

}
