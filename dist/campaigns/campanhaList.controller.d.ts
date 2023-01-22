import { ContactListService } from './contactList.service';
import { CreateContactListDto } from './create-contactList.dto';
export declare class ContactListController {
    private readonly contactListService;
    constructor(contactListService: ContactListService);
    getAll(param: any): any;
    createList(createContactListDto: CreateContactListDto): any;
    getListById(param: any): any;
    getListByUserId(param: any): any;
}
