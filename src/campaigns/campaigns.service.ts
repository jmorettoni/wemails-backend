import {
    Injectable,
    BadRequestException
  } from '@nestjs/common';
  import {
    CreateCampaignDto
  } from './create-campaigns.dto';
  import {
    InjectModel
  } from '@nestjs/mongoose';
  import {
    Model
  } from 'mongoose';
  import {
    Campaign,
    CampaignDocument
  } from './campaigns.schema';
  
  @Injectable()
  export class CampaignService {
  
       constructor(@InjectModel(Campaign.name) private campaignModel: Model < CampaignDocument > ) {}
  
 
       //////////////
        async getAll(){
              return await this.campaignModel.find().sort( { _id: -1 } ).exec();
        }
       ///////////////

  
       ///////////-
        async getCampaignById( _id: string) {
                return this.campaignModel.findOne({
                  _id
                }).exec();
        }
        ///////////


           ///////////-
           async getCampaignByUserId( listUserId: string) {
            return this.campaignModel.find({
              listUserId
            }).sort( { _id: -1 } ).exec();
          }
          ///////////
         
        

        ///////////
        async getCampaignByUser(listUserId: string) {
              return this.campaignModel.findOne({
                listUserId
                }).exec();
        }
        ///////////
        
      

        ///////////
        async createCampaign(createListaDto: CreateCampaignDto) {
                // validate DTO 
                const createCampaign  = new this.campaignModel(createListaDto);
                // check if user exists
                const campaign = await this.getCampaignById(createCampaign._id);
                if (campaign) {
                  throw new BadRequestException();
                } 
                return createCampaign.save();
        }
        ///////////

    
  }