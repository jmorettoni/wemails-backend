import {
    Module
  } from '@nestjs/common';
  import {
    FormService
  } from './forms.service';
  import {
    FormController
  } from './forms.controller';
  import {
    MongooseModule
  } from '@nestjs/mongoose';
  import {
    Form,
    FormSchema
  } from 'src/forms/forms.schema';
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
        name: Form.name,
        schema: FormSchema
     }]),
   JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: {
        expiresIn: '60d'
      },
    }),
  ],
  controllers: [FormController],
  providers: [FormService, JwtStrategy , TaskService ], 
})

  export class FormModule {} 