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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CampaignSchema = exports.Campaign = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let Campaign = class Campaign {
};
__decorate([
    (0, mongoose_1.Prop)({
        required: true
    }),
    __metadata("design:type", String)
], Campaign.prototype, "campanhaName", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true
    }),
    __metadata("design:type", String)
], Campaign.prototype, "campanhaUserId", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false
    }),
    __metadata("design:type", String)
], Campaign.prototype, "nameFrom", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false
    }),
    __metadata("design:type", String)
], Campaign.prototype, "campanhaImage", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false
    }),
    __metadata("design:type", Number)
], Campaign.prototype, "totalEnviados", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false
    }),
    __metadata("design:type", Number)
], Campaign.prototype, "totalEntregues", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false
    }),
    __metadata("design:type", Number)
], Campaign.prototype, "totalBloqueados", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false
    }),
    __metadata("design:type", Number)
], Campaign.prototype, "totalAbertos", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false
    }),
    __metadata("design:type", Number)
], Campaign.prototype, "totalClicados", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false
    }),
    __metadata("design:type", String)
], Campaign.prototype, "createDate", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false
    }),
    __metadata("design:type", String)
], Campaign.prototype, "lastUpdate", void 0);
Campaign = __decorate([
    (0, mongoose_1.Schema)()
], Campaign);
exports.Campaign = Campaign;
exports.CampaignSchema = mongoose_1.SchemaFactory.createForClass(Campaign);
//# sourceMappingURL=campaigns.schema.js.map