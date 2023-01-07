import { Body, Controller, Delete, Get, Param, Post, Put ,     UseGuards  } from '@nestjs/common';
import { Task } from './shared/task';
import { TaskService } from './shared/task.service/task.service';

import {  AuthGuard } from '@nestjs/passport';

@Controller('tasks')
export class TasksController {


    
     constructor( 
        private taskService:TaskService
        ){ 
     }


     @UseGuards(AuthGuard('jwt'))
     @Get()
     async getAll() : Promise<Task[]>{
                 return this.taskService.getAll();
     }

     

     @UseGuards(AuthGuard('jwt'))
     @Get(':id')
     async getById( @Param('id') id:string ) : Promise<Task>{
                 return this.taskService.getById(id);
     }
     


     @UseGuards(AuthGuard('jwt'))
     @Post()
     async create(@Body() task : Task) :  Promise<Task>{
          return this.taskService.create(task);
     }



     @UseGuards(AuthGuard('jwt'))
     @Put(':id')
     async update(@Param('id') id:string , @Body() task : Task) :  Promise<Task>{
          task.id = id;
          return this.taskService.update(id,task);
     }



     @UseGuards(AuthGuard('jwt'))
     @Delete(':id')
     async delete(@Param('id') id:string ){
        this.taskService.delete(id);
     }



}
