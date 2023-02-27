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
exports.RotineSchema = exports.Rotine = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let Rotine = class Rotine {
};
__decorate([
    (0, mongoose_1.Prop)({
        required: true
    }),
    __metadata("design:type", String)
], Rotine.prototype, "nomeRotina", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true
    }),
    __metadata("design:type", String)
], Rotine.prototype, "rotinaUserId", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false
    }),
    __metadata("design:type", String)
], Rotine.prototype, "tipoRotina", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false
    }),
    __metadata("design:type", String)
], Rotine.prototype, "listaID", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false
    }),
    __metadata("design:type", String)
], Rotine.prototype, "qtdDias", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false
    }),
    __metadata("design:type", String)
], Rotine.prototype, "momentoAgendamento", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false
    }),
    __metadata("design:type", String)
], Rotine.prototype, "horaAgendamento", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false
    }),
    __metadata("design:type", String)
], Rotine.prototype, "minutoAgendamento", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false
    }),
    __metadata("design:type", String)
], Rotine.prototype, "campoAssunto", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false
    }),
    __metadata("design:type", String)
], Rotine.prototype, "campoNomeFrom", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false
    }),
    __metadata("design:type", String)
], Rotine.prototype, "campoEmailFrom", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false
    }),
    __metadata("design:type", String)
], Rotine.prototype, "diasData", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false
    }),
    __metadata("design:type", String)
], Rotine.prototype, "momentoData", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false
    }),
    __metadata("design:type", String)
], Rotine.prototype, "tipoInteracao", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false
    }),
    __metadata("design:type", String)
], Rotine.prototype, "diaMes", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false
    }),
    __metadata("design:type", String)
], Rotine.prototype, "diaSemana", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false
    }),
    __metadata("design:type", String)
], Rotine.prototype, "frequencia", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false
    }),
    __metadata("design:type", String)
], Rotine.prototype, "diasDataMomento", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false
    }),
    __metadata("design:type", String)
], Rotine.prototype, "definaTempo", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false
    }),
    __metadata("design:type", String)
], Rotine.prototype, "tempoEnviarEmail", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false
    }),
    __metadata("design:type", String)
], Rotine.prototype, "tipoTempo", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false
    }),
    __metadata("design:type", String)
], Rotine.prototype, "statusRotina", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false
    }),
    __metadata("design:type", Number)
], Rotine.prototype, "totalEnviados", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false
    }),
    __metadata("design:type", Number)
], Rotine.prototype, "totalEntregues", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false
    }),
    __metadata("design:type", Number)
], Rotine.prototype, "totalBloqueados", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false
    }),
    __metadata("design:type", Number)
], Rotine.prototype, "totalAbertos", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false
    }),
    __metadata("design:type", Number)
], Rotine.prototype, "totalClicados", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false
    }),
    __metadata("design:type", String)
], Rotine.prototype, "createDate", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false
    }),
    __metadata("design:type", String)
], Rotine.prototype, "lastUpdate", void 0);
Rotine = __decorate([
    (0, mongoose_1.Schema)()
], Rotine);
exports.Rotine = Rotine;
exports.RotineSchema = mongoose_1.SchemaFactory.createForClass(Rotine);
//# sourceMappingURL=rotines.schema.js.map