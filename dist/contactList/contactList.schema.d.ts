/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Document } from 'mongoose';
export type ContactListDocument = ContactList & Document;
export declare class ContactList {
    listName: string;
    listUserId: string;
    nameFrom: string;
    listImage: string;
    totalSubscribers: number;
    totalSubscribersConfirmed: number;
    pctSubscribersConfirmed: number;
    createDate: number;
    lastUpdate: number;
}
export declare const ContactListSchema: import("mongoose").Schema<ContactList, import("mongoose").Model<ContactList, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, ContactList>;
