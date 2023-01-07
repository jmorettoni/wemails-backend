import {
    Schema,
    SchemaFactory,
    Prop
  } from "@nestjs/mongoose";
  import {
    Document
  } from 'mongoose';
  
  export type UserDocument = User & Document;
  
  @Schema()
  export class User {
          @Prop({
            required: true
          })
          username: string;
          @Prop({
            required: true
          })
          email: string;
          @Prop({
            required: true
          })
          password: string;
          @Prop({
            required: true
          }) 
          firebaseAccessToken: string;
          @Prop({
            required: false
          })
          displayName: string;
          @Prop({
            required: true
          })
          firebase_uid: string;
          @Prop({
            required: false
          })
          photoURL: string;
  }
  export const UserSchema = SchemaFactory.createForClass(User);