import { RotineService } from './rotines.service';
import { CreateRotineDto } from './create-rotines.dto';
export declare class RotineController {
    private readonly rotineService;
    constructor(rotineService: RotineService);
    getAll(param: any): Promise<(import("./rotines.schema").Rotine & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    createRotine(createRotineDto: CreateRotineDto): Promise<import("./rotines.schema").Rotine & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getRotineById(param: any): Promise<import("./rotines.schema").Rotine & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getRotineByUserId(param: any): Promise<(import("./rotines.schema").Rotine & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    removeRotine(param: any, rotines: any): Promise<{
        return: import("mongodb").DeleteResult;
    } | {
        error: any;
    }>;
    updateRotine(param: any, rotine: any): Promise<import("mongodb").UpdateResult>;
}
