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
exports.RotineService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const rotines_schema_1 = require("./rotines.schema");
const task_service_1 = require("../tasks/shared/task.service/task.service");
let RotineService = class RotineService {
    constructor(rotineModel, taskService) {
        this.rotineModel = rotineModel;
        this.taskService = taskService;
    }
    async getAll() {
        return await this.rotineModel.find().sort({ _id: -1 }).exec();
    }
    async getRotineById(_id) {
        return this.rotineModel.findOne({
            _id
        }).exec();
    }
    async getRotineByUserId(rotineUserId) {
        return this.rotineModel.find({
            rotineUserId
        }).sort({ _id: -1 }).exec();
    }
    async getRotineByUser(rotineUserId) {
        return this.rotineModel.findOne({
            rotineUserId
        }).exec();
    }
    async createRotine(createRotineDto) {
        const createRotine = new this.rotineModel(createRotineDto);
        const rotine = await this.getRotineById(createRotine._id);
        if (rotine) {
            throw new common_1.BadRequestException();
        }
        return createRotine.save();
    }
    async updateRotineByUserId(userid, rotine) {
        console.log('TESTANDO EDIT rotine');
        let rotineId = rotine._id;
        console.log('rotine TO SAVE USERID', userid);
        delete rotine._id;
        const createDate = Date.now();
        rotine.lastUpdate = createDate;
        console.log('rotine TO SAVE', rotine);
        return await this.rotineModel.updateOne({ _id: rotineId, rotineUserId: userid }, rotine).exec();
    }
    async removeRotineByUserId(userId, rotineArray) {
        console.log("removeRotineByUserId", userId);
        console.log("removeRotineByUserId", rotineArray);
        return await this.rotineModel.deleteMany({ rotineUserId: userId,
            _id: { $in: rotineArray } }).exec().then(res => {
            let task = {
                "description": "DELETE-ROTINAS",
                "object": rotineArray,
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
RotineService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(rotines_schema_1.Rotine.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        task_service_1.TaskService])
], RotineService);
exports.RotineService = RotineService;
//# sourceMappingURL=rotines.service.js.map