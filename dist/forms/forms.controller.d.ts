import { FormService } from './forms.service';
import { CreateFormDto } from './create-forms.dto';
export declare class FormController {
    private readonly formService;
    constructor(formService: FormService);
    getAll(param: any): Promise<(import("./forms.schema").Form & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    createList(createFormDto: CreateFormDto): Promise<import("./forms.schema").Form & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getListById(param: any): Promise<import("./forms.schema").Form & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getCampanhaByUserId(param: any): Promise<(import("./forms.schema").Form & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    removeList(param: any, forms: any): Promise<{
        return: import("mongodb").DeleteResult;
    } | {
        error: any;
    }>;
    updateList(param: any, campanha: any): Promise<import("mongodb").UpdateResult>;
}
