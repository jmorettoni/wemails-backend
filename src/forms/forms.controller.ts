import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    UseGuards
  } from '@nestjs/common';


  import { FormService } from './forms.service';
  import {   CreateFormDto } from './create-forms.dto';
  import {   AuthGuard  } from '@nestjs/passport';
  
  @Controller('forms')
  export class FormController {
    
      
        constructor(private readonly formService: FormService) {

        }


        /*  */
        @UseGuards(AuthGuard('jwt'))
        @Get('')
        getAll(@Param() param) {
          return this.formService.getAll();
        }
      



        @UseGuards(AuthGuard('jwt'))
        @Post()
        createList(@Body() createFormDto: CreateFormDto) {
          return this.formService.createForm(createFormDto);
        }
    


        @UseGuards(AuthGuard('jwt'))
        @Get('_id')
        getFormById(@Param() param) {
          return this.formService.getFormById(param._id); 
        } 


        @UseGuards(AuthGuard('jwt'))
        //@Get('listUserId')
        @Get('/formUserId/:formUserId')
        getFormByUserId(@Param() param) {
          return this.formService.getFormByUserId(param.formUserId); 
        } 

       
        @UseGuards(AuthGuard('jwt')) 
        @Post('/userIdRemove/:userIdRemove')
        removeForm( @Param() param , @Body() forms    ) {
          return this.formService.removeFormByUserId( param.userIdRemove  ,  forms.forms ); 
        } 
         

       
        @UseGuards(AuthGuard('jwt')) 
        @Post('/userIdEdit/:userIdEdit')
        updateForm( @Param() param , @Body() campanha    ) {
          return this.formService.updateFormByUserId( param.userIdEdit  ,  campanha  ); 
        } 
        
       

    
  } 