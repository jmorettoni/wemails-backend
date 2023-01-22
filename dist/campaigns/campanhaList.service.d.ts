import { CreateContactListDto } from './create-contactList.dto';
import { Model } from 'mongoose';
import { ContactListDocument } from './contactList.schema';
export declare class ContactListService {
    private contactListModel;
    constructor(contactListModel: Model<ContactListDocument>);
    getAll(): Promise<any[]>;
    getContactListById(_id: string): Promise<any>;
    getContactListByUserId(listUserId: string): Promise<any[]>;
    getContactListByUser(listUserId: string): Promise<any>;
    createContactList(createListaDto: CreateContactListDto): Promise<any>;
}
