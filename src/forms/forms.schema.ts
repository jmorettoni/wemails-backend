import {
    Schema,
    SchemaFactory,
    Prop
  } from "@nestjs/mongoose";
  import {
    Document
  } from 'mongoose';
  
  export type FormDocument = Form & Document;
  
  @Schema()
  export class Form {
          @Prop({
            required: true
          })
          formName: string;
          @Prop({
            required: true
          })
          formUserId: string;
          @Prop({
            required: false
          })
          formType: string;
          @Prop({
            required: false
          })
          formListId: string;
          @Prop({
            required: false
          })
          createDate: string;
          @Prop({
            required: false
          })
          lastUpdate: string; 
  }

 

  export const FormSchema = SchemaFactory.createForClass(Form);