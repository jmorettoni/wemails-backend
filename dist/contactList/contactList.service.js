"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactListService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const contactList_schema_1 = require("./contactList.schema");
let ContactListService = class ContactListService {
    constructor(contactListModel) {
        this.contactListModel = contactListModel;
    }
    async getAll() {
        return await this.contactListModel.find().sort({ _id: -1 }).exec();
    }
    async getContactListById(listUserId) {
        return this.contactListModel.find({
            listUserId
        }).exec();
    }
    async getContactListByUser(listUserId) {
        return this.contactListModel.findOne({
            listUserId
        }).exec();
    }
    async createContactList(createListaDto) {
        const createContactList = new this.contactListModel(createListaDto);
        const contactList = await this.getContactListById(createContactList._id);
        if (contactList) {
            throw new common_1.BadRequestException();
        }
        return createContactList.save();
    }
};
ContactListService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(contactList_schema_1.ContactList.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ContactListService);
exports.ContactListService = ContactListService;
//# sourceMappingURL=contactList.service.js.map