"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const _environment_1 = require("./environment");
const chalk = require("chalk");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    await app.listen(_environment_1.PORT);
    app.enableCors({ origin: '*' });
    if (module.hot) {
        module.hot.accept();
        module.hot.dispose(() => app.close());
    }
    console.log(`------- Server start at: ${chalk.greenBright(`${_environment_1.PORT}/${_environment_1.ENDPOINT}`)} -------`);
}
bootstrap();
//# sourceMappingURL=main.js.map