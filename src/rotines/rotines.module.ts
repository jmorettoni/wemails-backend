import {
    Module
  } from '@nestjs/common';
  import {
    RotineService
  } from './rotines.service';
  import {
    RotineController
  } from './rotines.controller';
  import {
    MongooseModule
  } from '@nestjs/mongoose';
  import {
    Rotine,
    RotineSchema
  } from 'src/rotines/rotines.schema';
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
  /*
  import {
    LocalStrategy
  } from 'src/strategy/local.strategy';
  */

import { TaskService } from 'src/tasks/shared/task.service/task.service';


import { TaskSchema } from 'src/tasks/schemas/task.schema';
  

@Module({
  imports: [
    MongooseModule.forFeature([{name:"Task" ,schema : TaskSchema }]),
    MongooseModule.forFeature([{
        name: Rotine.name,
        schema: RotineSchema
     }]),
   JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: {
        expiresIn: '60d'
      },
    }),
  ],
  controllers: [RotineController],
  providers: [RotineService, JwtStrategy , TaskService ], 
})

  export class RotineModule {} 