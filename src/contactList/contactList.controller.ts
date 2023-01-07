import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    UseGuards
  } from '@nestjs/common';


  import { ContactListService } from './contactList.service';
  import {   CreateContactListDto } from './create-contactList.dto';
  import {   AuthGuard  } from '@nestjs/passport';
  
  @Controller('contactList')
  export class ContactListController {
    
      
        constructor(private readonly contactListService: ContactListService) {

        }

        @UseGuards(AuthGuard('jwt'))
        @Get('')
        getAll(@Param() param) {
          return this.contactListService.getAll();
        }

        @UseGuards(AuthGuard('jwt'))
        @Post()
        createList(@Body() createContactListDto: CreateContactListDto) {
          return this.contactListService.createContactList(createContactListDto);
        }
    


        @UseGuards(AuthGuard('jwt'))
        @Get(':_id')
        getListById(@Param() param) {
          return this.contactListService.getContactListById(param._id); 
        } 


        @UseGuards(AuthGuard('jwt'))
        @Get(':listUserId')
        getListByUserId(@Param() param) {
          return this.contactListService.getContactListByUserId(param.listUserId); 
        } 

        
       

    
  } 