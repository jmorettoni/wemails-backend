import { CreateFormDto } from './create-forms.dto';
import { Model } from 'mongoose';
import { FormDocument } from './forms.schema';
import { TaskService } from '../tasks/shared/task.service/task.service';
export declare class FormService {
    private formModel;
    private taskService;
    constructor(formModel: Model<FormDocument>, taskService: TaskService);
    getAll(): Promise<any[]>;
    getFormById(_id: string): Promise<any>;
    getFormByUserId(formUserId: string): Promise<any[]>;
    getFormByUser(formUserId: string): Promise<any>;
    createForm(createFormDto: CreateFormDto): Promise<any>;
    updateFormByUserId(userid: String, form: any): Promise<import("mongodb").UpdateResult>;
    removeFormByUserId(userId: any, formArray: any): Promise<{
        return: import("mongodb").DeleteResult;
    } | {
        error: any;
    }>;
}
