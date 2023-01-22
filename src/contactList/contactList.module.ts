import {
    Module
  } from '@nestjs/common';
  import {
    ContactListService
  } from './contactList.service';
  import {
    ContactListController
  } from './contactList.controller';
  import {
    MongooseModule
  } from '@nestjs/mongoose';
  import {
    ContactList,
    ContactListSchema
  } from 'src/contactList/contactList.schema';
  import {
    JwtModule
  } from '@nestjs/jwt';
  import {
    jwtConstants
  } from 'src/strategy/constants';
  /*import {
    HashService
  } from 'src/users/hash.service';
  */
 /*
  import {
    AuthService
  } from 'src/auth/auth.service';
  */
  import {
    JwtStrategy
  } from 'src/strategy/jwt.strategy';
  


import { TaskService } from 'src/tasks/shared/task.service/task.service';


import { TaskSchema } from 'src/tasks/schemas/task.schema';

 
  @Module({
    imports: [
      MongooseModule.forFeature([{name:"Task" ,schema : TaskSchema }]),
      MongooseModule.forFeature([{
          name: ContactList.name,
          schema: ContactListSchema
       }]),
     JwtModule.register({
        secret: jwtConstants.secret,
        signOptions: {
          expiresIn: '60d'
        },
      }),
    ],
    controllers: [ContactListController],
    providers: [ContactListService, JwtStrategy , TaskService ], 
  })
  export class ContactListModule {} 