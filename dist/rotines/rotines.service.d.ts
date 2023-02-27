import { CreateRotineDto } from './create-rotines.dto';
import { Model } from 'mongoose';
import { Rotine, RotineDocument } from './rotines.schema';
import { TaskService } from '../tasks/shared/task.service/task.service';
export declare class RotineService {
    private rotineModel;
    private taskService;
    constructor(rotineModel: Model<RotineDocument>, taskService: TaskService);
    getAll(): Promise<(Rotine & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    getRotineById(_id: string): Promise<Rotine & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getRotineByUserId(rotineUserId: string): Promise<(Rotine & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    getRotineByUser(rotineUserId: string): Promise<Rotine & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    createRotine(createRotineDto: CreateRotineDto): Promise<Rotine & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    updateRotineByUserId(userid: String, rotine: any): Promise<import("mongodb").UpdateResult>;
    removeRotineByUserId(userId: any, rotineArray: any): Promise<{
        return: import("mongodb").DeleteResult;
    } | {
        error: any;
    }>;
}
