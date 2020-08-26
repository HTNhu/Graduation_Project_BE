"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggingInterceptor = void 0;
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const chalk_1 = __importDefault(require("chalk"));
let LoggingInterceptor = (() => {
    let LoggingInterceptor = class LoggingInterceptor {
        intercept(context, next) {
            const now = Date.now();
            return next.handle().pipe(operators_1.tap(() => {
                const ctx = context.getArgs()[3];
                console.log(new Date().toLocaleString(), '⛩  ', chalk_1.default.magentaBright.bold(ctx ? ctx.parentType : ''), '»', ctx ? ctx.fieldName : '', chalk_1.default.yellowBright.italic(`+${Date.now() - now}ms`));
            }), operators_1.catchError(err => {
                console.log(new Date().toLocaleString(), '⛩  ', chalk_1.default.bgRedBright(`${chalk_1.default.white.bold('EXCEPTION:')}`), '»', chalk_1.default.red(err.message), chalk_1.default.yellowBright.italic(`+${Date.now() - now}ms`));
                return rxjs_1.throwError(err);
            }));
        }
    };
    LoggingInterceptor = __decorate([
        common_1.Injectable()
    ], LoggingInterceptor);
    return LoggingInterceptor;
})();
exports.LoggingInterceptor = LoggingInterceptor;
//# sourceMappingURL=logging.js.map