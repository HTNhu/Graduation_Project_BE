"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const _auth_1 = require("./auth");
const graphql_1 = require("@nestjs/graphql");
const _config_1 = require("./config");
const typeorm_1 = require("@nestjs/typeorm");
const Resolvers = __importStar(require("./resolvers"));
const Utils = __importStar(require("./utils"));
const core_1 = require("@nestjs/core");
const _interceptors_1 = require("./interceptors");
let AppModule = (() => {
    let AppModule = class AppModule {
    };
    AppModule = __decorate([
        common_1.Module({
            imports: [
                graphql_1.GraphQLModule.forRootAsync({
                    useClass: _config_1.GraphQLConfiguration
                }),
                typeorm_1.TypeOrmModule.forRootAsync({
                    useClass: _config_1.TypeORMConfiguration
                })
            ],
            providers: [
                _auth_1.AuthService,
                ...Object.values(Utils),
                ...Object.values(Resolvers),
                { provide: core_1.APP_INTERCEPTOR, useClass: _interceptors_1.LoggingInterceptor }
            ]
        })
    ], AppModule);
    return AppModule;
})();
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map