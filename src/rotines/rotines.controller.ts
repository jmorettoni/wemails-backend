import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    UseGuards
  } from '@nestjs/common';


  import { RotineService } from './rotines.service';
  import {   CreateRotineDto } from './create-rotines.dto';
  import {   AuthGuard  } from '@nestjs/passport';
  
  @Controller('rotines')
  export class RotineController {
    
      
        constructor(private readonly rotineService: RotineService) {

        }


        /*  */
        @UseGuards(AuthGuard('jwt'))
        @Get('')
        getAll(@Param() param) {
          return this.rotineService.getAll();
        }
      



        @UseGuards(AuthGuard('jwt'))
        @Post()
        createRotine(@Body() createRotineDto: CreateRotineDto) {
          return this.rotineService.createRotine(createRotineDto);
        }
    


        @UseGuards(AuthGuard('jwt'))
        @Get(':_id')
        getRotineById(@Param() param) {
          return this.rotineService.getRotineById(param._id); 
        } 


        @UseGuards(AuthGuard('jwt'))
        //@Get('listUserId')
        @Get('/rotineUserId/:rotineUserId')
        getRotineByUserId(@Param() param) {
          return this.rotineService.getRotineByUserId(param.rotineUserId); 
        } 

       
        @UseGuards(AuthGuard('jwt')) 
        @Post('/userIdRemove/:userIdRemove')
        removeRotine( @Param() param , @Body() rotines    ) {
          return this.rotineService.removeRotineByUserId( param.userIdRemove  ,  rotines.rotines ); 
        } 
         

       
        @UseGuards(AuthGuard('jwt')) 
        @Post('/userIdEdit/:userIdEdit')
        updateRotine( @Param() param , @Body() rotine    ) {
          return this.rotineService.updateRotineByUserId( param.userIdEdit  ,  rotine  ); 
        } 
        
       

    
  } 