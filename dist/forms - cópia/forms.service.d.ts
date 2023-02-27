import { CreateFormDto } from './create-forms.dto';
import { Model } from 'mongoose';
import { Form, FormDocument } from './forms.schema';
import { TaskService } from '../tasks/shared/task.service/task.service';
export declare class FormService {
    private formModel;
    private taskService;
    constructor(formModel: Model<FormDocument>, taskService: TaskService);
    getAll(): Promise<(Form & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    getFormById(_id: string): Promise<Form & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getFormByUserId(formUserId: string): Promise<(Form & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    getFormByUser(formUserId: string): Promise<Form & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    createForm(createFormDto: CreateFormDto): Promise<Form & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    updateFormByUserId(userid: String, form: any): Promise<import("mongodb").UpdateResult>;
    removeFormByUserId(userId: any, formArray: any): Promise<{
        return: import("mongodb").DeleteResult;
    } | {
        error: any;
    }>;
}
