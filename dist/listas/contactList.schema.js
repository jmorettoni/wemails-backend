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
exports.ListaSchema = exports.Lista = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let Lista = class Lista {
};
__decorate([
    (0, mongoose_1.Prop)({
        required: true
    }),
    __metadata("design:type", String)
], Lista.prototype, "username", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true
    }),
    __metadata("design:type", String)
], Lista.prototype, "email", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true
    }),
    __metadata("design:type", String)
], Lista.prototype, "password", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true
    }),
    __metadata("design:type", String)
], Lista.prototype, "firebaseAccessToken", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false
    }),
    __metadata("design:type", String)
], Lista.prototype, "displayName", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true
    }),
    __metadata("design:type", String)
], Lista.prototype, "firebase_uid", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false
    }),
    __metadata("design:type", String)
], Lista.prototype, "photoURL", void 0);
Lista = __decorate([
    (0, mongoose_1.Schema)()
], Lista);
exports.Lista = Lista;
exports.ListaSchema = mongoose_1.SchemaFactory.createForClass(Lista);
//# sourceMappingURL=contactList.schema.js.map