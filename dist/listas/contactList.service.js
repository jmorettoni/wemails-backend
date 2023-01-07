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
exports.ListaService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const hash_service_1 = require("./hash.service");
const lista_schema_1 = require("./lista.schema");
let ListaService = class ListaService {
    constructor(listaModel, hashService) {
        this.listaModel = listaModel;
        this.hashService = hashService;
    }
    async getUserByUsername(username) {
        return this.listaModel.findOne({
            username
        })
            .exec();
    }
    async registerUser(createListaDto) {
        const createLista = new this.listaModel(createListaDto);
        const lista = await this.getUserByUsername(createLista.username);
        if (lista) {
            throw new common_1.BadRequestException();
        }
        createLista.password = await this.hashService.hashPassword(createLista.password);
        return createLista.save();
    }
};
ListaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(lista_schema_1.Lista.name)),
    __metadata("design:paramtypes", [mongoose_2.Model, hash_service_1.HashService])
], ListaService);
exports.ListaService = ListaService;
//# sourceMappingURL=contactList.service.js.map