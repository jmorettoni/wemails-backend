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
  /*
  import {
    LocalStrategy
  } from 'src/strategy/local.strategy';
  */
  
  @Module({
    imports: [
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
    providers: [ContactListService, JwtStrategy],
  })
  export class ContactListModule {} 