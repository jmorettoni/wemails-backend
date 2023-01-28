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
exports.CampaignController = void 0;
const common_1 = require("@nestjs/common");
const campaigns_service_1 = require("./campaigns.service");
const create_campaigns_dto_1 = require("./create-campaigns.dto");
const passport_1 = require("@nestjs/passport");
let CampaignController = class CampaignController {
    constructor(campaignService) {
        this.campaignService = campaignService;
    }
    getAll(param) {
        return this.campaignService.getAll();
    }
    createList(createCampaignDto) {
        return this.campaignService.createCampaign(createCampaignDto);
    }
    getListById(param) {
        return this.campaignService.getCampaignById(param._id);
    }
    getCampanhaByUserId(param) {
        return this.campaignService.getCampaignByUserId(param.campanhaUserId);
    }
    removeList(param, campanhas) {
        return this.campaignService.removeCampaignByUserId(param.userIdRemove, campanhas.campanhas);
    }
    updateList(param, campanha) {
        return this.campaignService.updateCampaignByUserId(param.userIdEdit, campanha);
    }
};
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Get)(''),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CampaignController.prototype, "getAll", null);
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_campaigns_dto_1.CreateCampaignDto]),
    __metadata("design:returntype", void 0)
], CampaignController.prototype, "createList", null);
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Get)('_id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CampaignController.prototype, "getListById", null);
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Get)('/campanhaUserId/:campanhaUserId'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CampaignController.prototype, "getCampanhaByUserId", null);
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Post)('/userIdRemove/:userIdRemove'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], CampaignController.prototype, "removeList", null);
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Post)('/userIdEdit/:userIdEdit'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], CampaignController.prototype, "updateList", null);
CampaignController = __decorate([
    (0, common_1.Controller)('campaigns'),
    __metadata("design:paramtypes", [campaigns_service_1.CampaignService])
], CampaignController);
exports.CampaignController = CampaignController;
//# sourceMappingURL=campaigns.controller.js.map