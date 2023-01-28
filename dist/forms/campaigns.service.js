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
exports.CampaignService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const campaigns_schema_1 = require("./campaigns.schema");
const task_service_1 = require("../tasks/shared/task.service/task.service");
let CampaignService = class CampaignService {
    constructor(campaignModel, taskService) {
        this.campaignModel = campaignModel;
        this.taskService = taskService;
    }
    async getAll() {
        return await this.campaignModel.find().sort({ _id: -1 }).exec();
    }
    async getCampaignById(_id) {
        return this.campaignModel.findOne({
            _id
        }).exec();
    }
    async getCampaignByUserId(campanhaUserId) {
        return this.campaignModel.find({
            campanhaUserId
        }).sort({ _id: -1 }).exec();
    }
    async getCampaignByUser(campanhaUserId) {
        return this.campaignModel.findOne({
            campanhaUserId
        }).exec();
    }
    async createCampaign(createListaDto) {
        const createCampaign = new this.campaignModel(createListaDto);
        const campaign = await this.getCampaignById(createCampaign._id);
        if (campaign) {
            throw new common_1.BadRequestException();
        }
        return createCampaign.save();
    }
    async updateCampaignByUserId(userid, campanha) {
        console.log('TESTANDO EDIT CAMPANHA');
        let campanhaId = campanha._id;
        console.log('list TO SAVE USERID', userid);
        delete campanha._id;
        const createDate = Date.now();
        campanha.lastUpdate = createDate;
        console.log('campanha TO SAVE', campanha);
        return await this.campaignModel.updateOne({ _id: campanhaId, campanhaUserId: userid }, campanha).exec();
    }
    async removeCampaignByUserId(userId, campanhaArray) {
        console.log("removeListByUserId", userId);
        console.log("removeListByUserId", campanhaArray);
        return await this.campaignModel.deleteMany({ campanhaUserId: userId, _id: { $in: campanhaArray } }).exec().then(res => {
            let task = {
                "description": "DELETE-CAMPAIGNS",
                "object": campanhaArray,
                "completed": false
            };
            this.taskService.create(task).then(res => {
                console.log("CREATE TASK");
            });
            return { return: res };
        }).catch(error => {
            return { error: error };
        });
    }
};
CampaignService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(campaigns_schema_1.Campaign.name)),
    __metadata("design:paramtypes", [mongoose_2.Model, task_service_1.TaskService])
], CampaignService);
exports.CampaignService = CampaignService;
//# sourceMappingURL=campaigns.service.js.map