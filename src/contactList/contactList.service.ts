import {
    Injectable,
    BadRequestException
  } from '@nestjs/common';


  import {
    CreateContactListDto
  } from './create-contactList.dto';

  import {
    InjectModel
  } from '@nestjs/mongoose';
  import {
    Model
  } from 'mongoose';


  import {
    ContactList,
    ContactListDocument
  } from './contactList.schema';


  import { TaskService } from '../tasks/shared/task.service/task.service';
 
  
  @Injectable()
  export class ContactListService {
  
       constructor(  @InjectModel(ContactList.name) private contactListModel: Model < ContactListDocument >  ,  private taskService:TaskService    ) {}
  
 
       //////////////
        async getAll(){
              return await this.contactListModel.find().sort( { _id: -1 } ).exec();
        }
       ///////////////

  
       ///////////-
        async getContactListById( _id: string) {
                return this.contactListModel.findOne({
                  _id
                }).exec();
        }
        ///////////


           ///////////-
           async getContactListByUserId( listUserId: string) {
            return this.contactListModel.find({
              listUserId
            }).sort( { _id: -1 } ).exec();
          }
          ///////////
         
        

        ///////////
        async getContactListByUser(listUserId: string) {
              return this.contactListModel.findOne({
                listUserId
                }).exec();
        }
        ///////////
        
      

        ///////////
        async createContactList(createListaDto: CreateContactListDto) {
                // validate DTO 
                const createContactList  = new this.contactListModel(createListaDto);
                // check if user exists
                const contactList = await this.getContactListById(createContactList._id);
                if (contactList) {
                  throw new BadRequestException();
                } 
                return createContactList.save();
        }
        ///////////



 


        async updateListByUserId(  userid:String , list  ){
          
          let listId = list._id;
          console.log('list TO SAVE USERID' , userid );
          delete list._id;
     
          const createDate = Date.now();
          list.lastUpdate = createDate;

          console.log('list TO SAVE' , list );
          return await this.contactListModel.updateOne(  { _id:listId, listUserId : userid  }, list).exec();  
        }
      ///////////////

      




        async removeListByUserId(userId, listArray){ 

              
                console.log("removeListByUserId" , userId);
                console.log("removeListByUserId" , listArray);


          

                
                  /////REMOVER/////// 
                  return await this.contactListModel.deleteMany({ listUserId : userId ,  _id: {$in:listArray}   }).exec().then(res=>{

                            /////ADICIONAR  TASK PARA REMOVER LISTA PARA REMOVER CADA EMAIL////////  
                            let task : any = {
                            "description": "DELETE-CONTACT-LIST",
                            "object" : listArray,
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