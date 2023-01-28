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
        @Get('/campanhaUserId/:campanhaUserId')
        getCampanhaByUserId(@Param() param) {
          return this.campaignService.getCampaignByUserId(param.campanhaUserId); 
        } 

        
        @UseGuards(AuthGuard('jwt')) 
        @Post('/userIdRemove/:userIdRemove')
        removeList( @Param() param , @Body() campanhas    ) {
          return this.campaignService.removeCampaignByUserId( param.userIdRemove  ,  campanhas.campanhas ); 
        } 

       
        @UseGuards(AuthGuard('jwt')) 
        @Post('/userIdEdit/:userIdEdit')
        updateList( @Param() param , @Body() list    ) {
          return this.campaignService.updateCampaignByUserId( param.userIdEdit  ,  list  ); 
        } 
        
       

    
  } 