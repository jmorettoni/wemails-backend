import {
    Injectable,
    BadRequestException
  } from '@nestjs/common';
  import {
    CreateRotineDto
  } from './create-rotines.dto';
  import {
    InjectModel
  } from '@nestjs/mongoose';
  import {
    Model
  } from 'mongoose';
  import {
    Rotine,
    RotineDocument
  } from './rotines.schema';

  import { TaskService } from '../tasks/shared/task.service/task.service';
  
  @Injectable()
  export class RotineService {
  
    constructor(@InjectModel(Rotine.name) private rotineModel: Model < RotineDocument > , 
     private taskService:TaskService   ) {}
  
 
       //////////////
        async getAll(){
              return await this.rotineModel.find().sort( { _id: -1 } ).exec();
        }
       ///////////////

  
       ///////////-
        async getRotineById( _id: string) {
                return this.rotineModel.findOne({
                  _id
                }).exec();
        }
        ///////////


           ///////////-
           async getRotineByUserId( rotineUserId: string) {
            return this.rotineModel.find({
              rotineUserId
            }).sort( { _id: -1 } ).exec();
          }
          ///////////
         
        

        ///////////
        async getRotineByUser(rotineUserId: string) {
              return this.rotineModel.findOne({
                rotineUserId
                }).exec();
        }
        ///////////
        
      

        ///////////
        async createRotine(createRotineDto: CreateRotineDto) {
                // validate DTO 
                const createRotine  = new this.rotineModel(createRotineDto);
                // check if user exists
                const rotine = await this.getRotineById(createRotine._id);
                if (rotine) {
                  throw new BadRequestException();
                } 
                return createRotine.save();
        }
        ///////////


        async updateRotineByUserId(  userid:String , rotine  ){
          
          console.log('TESTANDO EDIT rotine'  );
          let rotineId = rotine._id;
          console.log('rotine TO SAVE USERID' , userid );
          delete rotine._id;
     
          const createDate = Date.now();
          rotine.lastUpdate = createDate;

          console.log('rotine TO SAVE' , rotine );
          return await this.rotineModel.updateOne(  { _id:rotineId, rotineUserId : userid  },
             rotine).exec();  
        }
      ///////////////

      




        async removeRotineByUserId(userId, rotineArray){ 

              
                console.log("removeRotineByUserId" , userId);
                console.log("removeRotineByUserId" , rotineArray);


          

                
                  /////REMOVER/////// 
                  return await this.rotineModel.deleteMany({ rotineUserId : userId 
                    ,  _id: {$in:rotineArray}   }).exec().then(res=>{

                            /////ADICIONAR  TASK PARA REMOVER LISTA PARA REMOVER CADA EMAIL////////  
                            let task : any = {
                            "description": "DELETE-ROTINAS",
                            "object" : rotineArray,
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