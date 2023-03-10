"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
var cors = require('cors');
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use(cors());
    await app.listen(3000);
}
bootstrap();
var cors = require('cors');
//# sourceMappingURL=main.js.map