import {
    Injectable,
    BadRequestException
  } from '@nestjs/common';
  import {
    CreateFormDto
  } from './create-forms.dto';
  import {
    InjectModel
  } from '@nestjs/mongoose';
  import {
    Model
  } from 'mongoose';
  import {
    Form,
    FormDocument
  } from './forms.schema';

  import { TaskService } from '../tasks/shared/task.service/task.service';
  
  @Injectable()
  export class FormService {
  
    constructor(@InjectModel(Form.name) private formModel: Model < FormDocument > , 
     private taskService:TaskService   ) {}
  
 
       //////////////
        async getAll(){
              return await this.formModel.find().sort( { _id: -1 } ).exec();
        }
       ///////////////

  
       ///////////-
        async getFormById( _id: string) {
                return this.formModel.findOne({
                  _id
                }).exec();
        }
        ///////////


           ///////////-
           async getFormByUserId( formUserId: string) {
            return this.formModel.find({
              formUserId
            }).sort( { _id: -1 } ).exec();
          }
          ///////////
         
        

        ///////////
        async getFormByUser(formUserId: string) {
              return this.formModel.findOne({
                formUserId
                }).exec();
        }
        ///////////
        
      

        ///////////
        async createForm(createFormDto: CreateFormDto) {
                // validate DTO 
                const createForm  = new this.formModel(createFormDto);
                // check if user exists
                const form = await this.getFormById(createForm._id);
                if (form) {
                  throw new BadRequestException();
                } 
                return createForm.save();
        }
        ///////////


        async updateFormByUserId(  userid:String , form  ){
          
          console.log('TESTANDO EDIT CAMPANHA'  );
          let formId = form._id;
          console.log('list TO SAVE USERID' , userid );
          delete form._id;
     
          const createDate = Date.now();
          form.lastUpdate = createDate;

          console.log('campanha TO SAVE' , form );
          return await this.formModel.updateOne(  { _id:formId, formUserId : userid  },
             form).exec();  
        }
      ///////////////

      




        async removeFormByUserId(userId, formArray){ 

              
                console.log("removeFormByUserId" , userId);
                console.log("removeFormByUserId" , formArray);


          

                
                  /////REMOVER/////// 
                  return await this.formModel.deleteMany({ formUserId : userId 
                    ,  _id: {$in:formArray}   }).exec().then(res=>{

                            /////ADICIONAR  TASK PARA REMOVER LISTA PARA REMOVER CADA EMAIL////////  
                            let task : any = {
                            "description": "DELETE-FORMS",
                            "object" : formArray,
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