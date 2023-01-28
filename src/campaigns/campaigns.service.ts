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

  import { TaskService } from '../tasks/shared/task.service/task.service';
  
  @Injectable()
  export class CampaignService {
  
    constructor(@InjectModel(Campaign.name) private campaignModel: Model < CampaignDocument > ,  private taskService:TaskService   ) {}
  
 
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
           async getCampaignByUserId( campanhaUserId: string) {
            return this.campaignModel.find({
              campanhaUserId
            }).sort( { _id: -1 } ).exec();
          }
          ///////////
         
        

        ///////////
        async getCampaignByUser(campanhaUserId: string) {
              return this.campaignModel.findOne({
                campanhaUserId
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


        async updateCampaignByUserId(  userid:String , campanha  ){
          
          console.log('TESTANDO EDIT CAMPANHA'  );
          let campanhaId = campanha._id;
          console.log('list TO SAVE USERID' , userid );
          delete campanha._id;
     
          const createDate = Date.now();
          campanha.lastUpdate = createDate;

          console.log('campanha TO SAVE' , campanha );
          return await this.campaignModel.updateOne(  { _id:campanhaId, campanhaUserId : userid  }, campanha).exec();  
        }
      ///////////////

      




        async removeCampaignByUserId(userId, campanhaArray){ 

              
                console.log("removeListByUserId" , userId);
                console.log("removeListByUserId" , campanhaArray);


          

                
                  /////REMOVER/////// 
                  return await this.campaignModel.deleteMany({ campanhaUserId : userId ,  _id: {$in:campanhaArray}   }).exec().then(res=>{

                            /////ADICIONAR  TASK PARA REMOVER LISTA PARA REMOVER CADA EMAIL////////  
                            let task : any = {
                            "description": "DELETE-CAMPAIGNS",
                            "object" : campanhaArray,
                            "completed" : false
                            }; 
                         
                          
                            this.taskService.create(task).then(res=>{
                              console.log("CREATE TASK")
                            })
                          
                            
                    return {return :res}
                  }).catch(error=>{
                    return {error :error }
                  })
                  

        }

    
  }