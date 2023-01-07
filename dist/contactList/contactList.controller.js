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
exports.ContactListController = void 0;
const common_1 = require("@nestjs/common");
const contactList_service_1 = require("./contactList.service");
const create_contactList_dto_1 = require("./create-contactList.dto");
const passport_1 = require("@nestjs/passport");
let ContactListController = class ContactListController {
    constructor(contactListService) {
        this.contactListService = contactListService;
    }
    getAll(param) {
        return this.contactListService.getAll();
    }
    getListById(param) {
        return this.contactListService.getContactListById(param._id);
    }
    createList(createContactListDto) {
        return this.contactListService.createContactList(createContactListDto);
    }
};
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Get)(''),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ContactListController.prototype, "getAll", null);
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Get)(':_id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ContactListController.prototype, "getListById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_contactList_dto_1.CreateContactListDto]),
    __metadata("design:returntype", void 0)
], ContactListController.prototype, "createList", null);
ContactListController = __decorate([
    (0, common_1.Controller)('contactList'),
    __metadata("design:paramtypes", [contactList_service_1.ContactListService])
], ContactListController);
exports.ContactListController = ContactListController;
//# sourceMappingURL=contactList.controller.js.map