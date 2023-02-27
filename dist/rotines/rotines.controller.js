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
exports.RotineController = void 0;
const common_1 = require("@nestjs/common");
const rotines_service_1 = require("./rotines.service");
const create_rotines_dto_1 = require("./create-rotines.dto");
const passport_1 = require("@nestjs/passport");
let RotineController = class RotineController {
    constructor(rotineService) {
        this.rotineService = rotineService;
    }
    getAll(param) {
        return this.rotineService.getAll();
    }
    createRotine(createRotineDto) {
        return this.rotineService.createRotine(createRotineDto);
    }
    getRotineById(param) {
        return this.rotineService.getRotineById(param._id);
    }
    getRotineByUserId(param) {
        return this.rotineService.getRotineByUserId(param.rotineUserId);
    }
    removeRotine(param, rotines) {
        return this.rotineService.removeRotineByUserId(param.userIdRemove, rotines.rotines);
    }
    updateRotine(param, rotine) {
        return this.rotineService.updateRotineByUserId(param.userIdEdit, rotine);
    }
};
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Get)(''),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], RotineController.prototype, "getAll", null);
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_rotines_dto_1.CreateRotineDto]),
    __metadata("design:returntype", void 0)
], RotineController.prototype, "createRotine", null);
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Get)(':_id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], RotineController.prototype, "getRotineById", null);
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Get)('/rotineUserId/:rotineUserId'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], RotineController.prototype, "getRotineByUserId", null);
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Post)('/userIdRemove/:userIdRemove'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], RotineController.prototype, "removeRotine", null);
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Post)('/userIdEdit/:userIdEdit'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], RotineController.prototype, "updateRotine", null);
RotineController = __decorate([
    (0, common_1.Controller)('rotines'),
    __metadata("design:paramtypes", [rotines_service_1.RotineService])
], RotineController);
exports.RotineController = RotineController;
//# sourceMappingURL=rotines.controller.js.map