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
  
  @Injectable()
  export class ContactListService {
  
    constructor(@InjectModel(ContactList.name) private contactListModel: Model < ContactListDocument > ) {}
  



  
       //////////////
        async getAll(){
              return await this.contactListModel.find().sort( { _id: -1 } ).exec();
        }
       ///////////////

  
       ///////////
        async getContactListById( listUserId: string) {
                return this.contactListModel.find({
                  listUserId
                }).exec();
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

    
  }