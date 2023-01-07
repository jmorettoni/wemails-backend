import {
    Schema,
    SchemaFactory,
    Prop
  } from "@nestjs/mongoose";
  import {
    Document
  } from 'mongoose';
  
  export type ContactListDocument = ContactList & Document;
  
  @Schema()
  export class ContactList {
          @Prop({
            required: true
          })
          listName: string;
          @Prop({
            required: true
          })
          listUserId: string;
          @Prop({
            required: false
          })
          nameFrom: string;
          @Prop({
            required: false
          })
          listImage: string;
          @Prop({
            required: false
          }) 
          totalSubscribers: number;
          @Prop({
            required: false
          })
          totalSubscribersConfirmed: number;
          @Prop({
            required: false
          })
          pctSubscribersConfirmed: number;
          @Prop({
            required: false
          })
          createDate: string;
          @Prop({
            required: false
          })
          lastUpdate: string; 
  }

 

  export const ContactListSchema = SchemaFactory.createForClass(ContactList);