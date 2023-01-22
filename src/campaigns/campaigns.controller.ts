import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    UseGuards
  } from '@nestjs/common';


  import { CampaignService } from './campaigns.service';
  import {   CreateCampaignDto } from './create-campaigns.dto';
  import {   AuthGuard  } from '@nestjs/passport';
  
  @Controller('campaigns')
  export class CampaignController {
    
      
        constructor(private readonly campaignService: CampaignService) {

        }


        /*  */
        @UseGuards(AuthGuard('jwt'))
        @Get('')
        getAll(@Param() param) {
          return this.campaignService.getAll();
        }
      



        @UseGuards(AuthGuard('jwt'))
        @Post()
        createList(@Body() createCampaignDto: CreateCampaignDto) {
          return this.campaignService.createCampaign(createCampaignDto);
        }
    


        @UseGuards(AuthGuard('jwt'))
        @Get('_id')
        getListById(@Param() param) {
          return this.campaignService.getCampaignById(param._id); 
        } 


        @UseGuards(AuthGuard('jwt'))
        //@Get('listUserId')
        @Get('/listUserId/:listUserId')
        getListByUserId(@Param() param) {
          return this.campaignService.getCampaignByUserId(param.listUserId); 
        } 

        
       

    
  } 