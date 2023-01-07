import { Injectable } from '@nestjs/common';
import { Task } from '../task';

import { InjectModel } from '@nestjs/mongoose';

import {Model } from 'mongoose';
import { threadId } from 'worker_threads';
 
@Injectable()
export class TaskService {


    constructor (@InjectModel('Task') private readonly taskModel : Model<Task>){
     
    }


  
    ///////////////
    async getAll(){
        return await this.taskModel.find().exec();
    }
    ///////////////


    ///////////////
    async getById(id:String){
        const task = this.taskModel.findById(id).exec();
        return task;
    }
    ///////////////


    ///////////////
    async create(task:Task){
        const createdTask = new this.taskModel(task);
        return await createdTask.save();
    }
    ///////////////


    ///////////////
    async update(id:String , task : Task ){
        await this.taskModel.updateOne({_id:id}, task).exec();
        return this.getById(id);
    }
    ///////////////


    async delete(id:String){
        await this.taskModel.deleteOne({_id:id}).exec(); 
    }






}
