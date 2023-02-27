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
exports.FormSchema = exports.Form = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let Form = class Form {
};
__decorate([
    (0, mongoose_1.Prop)({
        required: true
    }),
    __metadata("design:type", String)
], Form.prototype, "formName", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true
    }),
    __metadata("design:type", String)
], Form.prototype, "formUserId", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false
    }),
    __metadata("design:type", String)
], Form.prototype, "formType", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false
    }),
    __metadata("design:type", String)
], Form.prototype, "formListId", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false
    }),
    __metadata("design:type", String)
], Form.prototype, "textoPrincipal", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false
    }),
    __metadata("design:type", String)
], Form.prototype, "descricao", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false
    }),
    __metadata("design:type", String)
], Form.prototype, "fundoGeral", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false
    }),
    __metadata("design:type", String)
], Form.prototype, "fundoConteudo", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false
    }),
    __metadata("design:type", String)
], Form.prototype, "corTexto", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false
    }),
    __metadata("design:type", String)
], Form.prototype, "corBorda", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false
    }),
    __metadata("design:type", String)
], Form.prototype, "corBotao", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false
    }),
    __metadata("design:type", String)
], Form.prototype, "corTextoBotao", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false
    }),
    __metadata("design:type", String)
], Form.prototype, "corBordaBotao", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false
    }),
    __metadata("design:type", String)
], Form.prototype, "modeloTemplate", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false
    }),
    __metadata("design:type", String)
], Form.prototype, "backgroundImage", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false
    }),
    __metadata("design:type", String)
], Form.prototype, "backgroundRepeat", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false
    }),
    __metadata("design:type", String)
], Form.prototype, "backgroundPosition", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false
    }),
    __metadata("design:type", String)
], Form.prototype, "tamanhoFonteTitulo", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false
    }),
    __metadata("design:type", String)
], Form.prototype, "tamanhoFonteDescricao", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false
    }),
    __metadata("design:type", String)
], Form.prototype, "tipoFonte", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false
    }),
    __metadata("design:type", String)
], Form.prototype, "botaoFechar", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false
    }),
    __metadata("design:type", String)
], Form.prototype, "fundoCampoTexto", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false
    }),
    __metadata("design:type", String)
], Form.prototype, "corCampoTexto", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false
    }),
    __metadata("design:type", String)
], Form.prototype, "bordaCampoTexto", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false
    }),
    __metadata("design:type", String)
], Form.prototype, "barPos", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false
    }),
    __metadata("design:type", String)
], Form.prototype, "intervaloMinimo", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false
    }),
    __metadata("design:type", String)
], Form.prototype, "qtdVisitas", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false
    }),
    __metadata("design:type", String)
], Form.prototype, "scrollOpt", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false
    }),
    __metadata("design:type", String)
], Form.prototype, "sairOpt", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false
    }),
    __metadata("design:type", Number)
], Form.prototype, "totalInscritos", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false
    }),
    __metadata("design:type", Number)
], Form.prototype, "totalVisitantes", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false
    }),
    __metadata("design:type", String)
], Form.prototype, "createDate", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false
    }),
    __metadata("design:type", String)
], Form.prototype, "lastUpdate", void 0);
Form = __decorate([
    (0, mongoose_1.Schema)()
], Form);
exports.Form = Form;
exports.FormSchema = mongoose_1.SchemaFactory.createForClass(Form);
//# sourceMappingURL=forms.schema.js.map