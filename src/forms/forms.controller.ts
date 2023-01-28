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
        getListById(@Param() param) {
          return this.formService.getFormById(param._id); 
        } 


        @UseGuards(AuthGuard('jwt'))
        //@Get('listUserId')
        @Get('/formUserId/:formUserId')
        getCampanhaByUserId(@Param() param) {
          return this.formService.getFormByUserId(param.formUserId); 
        } 

       
        @UseGuards(AuthGuard('jwt')) 
        @Post('/userIdRemove/:userIdRemove')
        removeList( @Param() param , @Body() forms    ) {
          return this.formService.removeFormByUserId( param.userIdRemove  ,  forms.forms ); 
        } 
         

       
        @UseGuards(AuthGuard('jwt')) 
        @Post('/userIdEdit/:userIdEdit')
        updateList( @Param() param , @Body() campanha    ) {
          return this.formService.updateFormByUserId( param.userIdEdit  ,  campanha  ); 
        } 
        
       

    
  } 