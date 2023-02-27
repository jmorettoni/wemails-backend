"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormModule = void 0;
const common_1 = require("@nestjs/common");
const forms_service_1 = require("./forms.service");
const forms_controller_1 = require("./forms.controller");
const mongoose_1 = require("@nestjs/mongoose");
const forms_schema_1 = require("../forms/forms.schema");
const jwt_1 = require("@nestjs/jwt");
const constants_1 = require("../strategy/constants");
const jwt_strategy_1 = require("../strategy/jwt.strategy");
const task_service_1 = require("../tasks/shared/task.service/task.service");
const task_schema_1 = require("../tasks/schemas/task.schema");
let FormModule = class FormModule {
};
FormModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: "Task", schema: task_schema_1.TaskSchema }]),
            mongoose_1.MongooseModule.forFeature([{
                    name: forms_schema_1.Form.name,
                    schema: forms_schema_1.FormSchema
                }]),
            jwt_1.JwtModule.register({
                secret: constants_1.jwtConstants.secret,
                signOptions: {
                    expiresIn: '60d'
                },
            }),
        ],
        controllers: [forms_controller_1.FormController],
        providers: [forms_service_1.FormService, jwt_strategy_1.JwtStrategy, task_service_1.TaskService],
    })
], FormModule);
exports.FormModule = FormModule;
//# sourceMappingURL=forms.module.js.map