import { CreateContactListDto } from './create-contactList.dto';
import { Model } from 'mongoose';
import { ContactList, ContactListDocument } from './contactList.schema';
export declare class ContactListService {
    private contactListModel;
    constructor(contactListModel: Model<ContactListDocument>);
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
}
