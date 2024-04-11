"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const dotenv = require("dotenv");
const swagger_documents_1 = require("./config/swagger.documents");
const swagger_1 = require("@nestjs/swagger");
Error.stackTraceLimit = Infinity;
const envFilePath = process.env.NODE_ENV === 'production' ? '.env' : '.env.dev';
const logger = new common_1.Logger('bootstrap');
logger.log(`Application is running in ${process.env.NODE_ENV} mode`);
dotenv.config({ path: envFilePath });
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const config = new swagger_documents_1.BaseAPIDocument().initializeOptions();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map