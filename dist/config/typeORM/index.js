"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeORMConfiguration = void 0;
const typeorm_1 = require("typeorm");
const _environment_1 = require("../../environment");
class TypeORMConfiguration {
    async createTypeOrmOptions() {
        return {
            type: 'mongodb',
            url: _environment_1.MONGODB_URL,
            entities: typeorm_1.getMetadataArgsStorage().tables.map(table => table.target),
            synchronize: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
            keepConnectionAlive: true,
            logging: true
        };
    }
}
exports.TypeORMConfiguration = TypeORMConfiguration;
//# sourceMappingURL=index.js.map