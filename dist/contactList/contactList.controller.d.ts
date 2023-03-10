import { ContactListService } from './contactList.service';
import { CreateContactListDto } from './create-contactList.dto';
export declare class ContactListController {
    private readonly contactListService;
    constructor(contactListService: ContactListService);
    getAll(param: any): Promise<(import("./contactList.schema").ContactList & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    createList(createContactListDto: CreateContactListDto): Promise<import("./contactList.schema").ContactList & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getListById(param: any): Promise<import("./contactList.schema").ContactList & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getListByUserId(param: any): Promise<(import("./contactList.schema").ContactList & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    removeList(param: any, lists: any): Promise<{
        return: import("mongodb").DeleteResult;
    } | {
        error: any;
    }>;
    updateList(param: any, list: any): Promise<import("mongodb").UpdateResult>;
}
