import {
    Schema,
    SchemaFactory,
    Prop
  } from "@nestjs/mongoose";
  import {
    Document
  } from 'mongoose';
  
  export type CampaignDocument = Campaign & Document;
  
  @Schema()
  export class Campaign {
          @Prop({
            required: true
          })
          campanhaName: string;
          @Prop({
            required: true
          })
          campanhaUserId: string;
          @Prop({
            required: false
          })
          nameFrom: string;
          @Prop({
            required: false
          })
          campanhaImage: string;
          @Prop({
            required: false
          }) 
          totalEnviados: number;
          @Prop({
            required: false
          })
          totalEntregues: number;
          @Prop({
            required: false
          })
          totalBloqueados: number;
          @Prop({
            required: false
          })
          totalAbertos: number;
          @Prop({
            required: false
          })
          totalClicados: number;
          @Prop({
            required: false
          })
          createDate: string;
          @Prop({
            required: false
          })
          lastUpdate: string; 
  }

 

  export const CampaignSchema = SchemaFactory.createForClass(Campaign);