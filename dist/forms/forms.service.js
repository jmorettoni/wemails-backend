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
exports.FormService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const forms_schema_1 = require("./forms.schema");
const task_service_1 = require("../tasks/shared/task.service/task.service");
let FormService = class FormService {
    constructor(formModel, taskService) {
        this.formModel = formModel;
        this.taskService = taskService;
    }
    async getAll() {
        return await this.formModel.find().sort({ _id: -1 }).exec();
    }
    async getFormById(_id) {
        return this.formModel.findOne({
            _id
        }).exec();
    }
    async getFormByUserId(formUserId) {
        return this.formModel.find({
            formUserId
        }).sort({ _id: -1 }).exec();
    }
    async getFormByUser(formUserId) {
        return this.formModel.findOne({
            formUserId
        }).exec();
    }
    async createForm(createFormDto) {
        const createForm = new this.formModel(createFormDto);
        const form = await this.getFormById(createForm._id);
        if (form) {
            throw new common_1.BadRequestException();
        }
        return createForm.save();
    }
    async updateFormByUserId(userid, form) {
        console.log('TESTANDO EDIT CAMPANHA');
        let formId = form._id;
        console.log('list TO SAVE USERID', userid);
        delete form._id;
        const createDate = Date.now();
        form.lastUpdate = createDate;
        console.log('campanha TO SAVE', form);
        return await this.formModel.updateOne({ _id: formId, formUserId: userid }, form).exec();
    }
    async removeFormByUserId(userId, formArray) {
        console.log("removeFormByUserId", userId);
        console.log("removeFormByUserId", formArray);
        return await this.formModel.deleteMany({ formUserId: userId,
            _id: { $in: formArray } }).exec().then(res => {
            let task = {
                "description": "DELETE-FORMS",
                "object": formArray,
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
FormService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(forms_schema_1.Form.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        task_service_1.TaskService])
], FormService);
exports.FormService = FormService;
//# sourceMappingURL=forms.service.js.map