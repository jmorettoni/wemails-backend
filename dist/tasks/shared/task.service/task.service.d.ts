import { Task } from '../task';
import { Model } from 'mongoose';
export declare class TaskService {
    private readonly taskModel;
    constructor(taskModel: Model<Task>);
    getAll(): Promise<(Task & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    getById(id: String): Promise<Task & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    create(task: Task): Promise<Task & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    update(id: String, task: Task): Promise<Task & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    delete(id: String): Promise<void>;
}
