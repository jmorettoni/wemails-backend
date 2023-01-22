import { CreateContactListDto } from './create-contactList.dto';
import { Model } from 'mongoose';
import { ContactList, ContactListDocument } from './contactList.schema';
import { TaskService } from '../tasks/shared/task.service/task.service';
export declare class ContactListService {
    private contactListModel;
    private taskService;
    constructor(contactListModel: Model<ContactListDocument>, taskService: TaskService);
    getAll(): Promise<(ContactList & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    getContactListById(_id: string): Promise<ContactList & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getContactListByUserId(listUserId: string): Promise<(ContactList & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    getContactListByUser(listUserId: string): Promise<ContactList & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    createContactList(createListaDto: CreateContactListDto): Promise<ContactList & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    updateListByUserId(userid: String, list: any): Promise<import("mongodb").UpdateResult>;
    removeListByUserId(userId: any, listArray: any): Promise<{
        return: import("mongodb").DeleteResult;
    } | {
        error: any;
    }>;
}
