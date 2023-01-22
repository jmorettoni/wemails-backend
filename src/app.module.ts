import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MongooseModule } from '@nestjs/mongoose';
 

import { ContactListModule } from './contactList/contactList.module';
import { CampaignModule } from './campaigns/campaigns.module';
import { UserModule } from './users/user.module';
import { AuthModule } from './auth/auth.module';
import { TasksModule } from './tasks/tasks.module';
 
@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://wemails01:TDEGPhF0vcqEzwri@wemailsprod.78pv7oa.mongodb.net/?retryWrites=true&w=majority'),
    ContactListModule,
    CampaignModule,
    UserModule,
    AuthModule,
    TasksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
