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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserEntity = void 0;
const typeorm_1 = require("typeorm");
const class_transformer_1 = require("class-transformer");
const uuid = __importStar(require("uuid"));
const _generator_1 = require("../generator/graphql.schema");
let UserEntity = (() => {
    var UserEntity_1;
    let UserEntity = UserEntity_1 = class UserEntity {
        constructor(user) {
            if (user) {
                Object.assign(this, class_transformer_1.plainToClass(UserEntity_1, user, {
                    excludeExtraneousValues: true
                }));
                this._id = this._id || uuid.v1();
                this.createdAt = +new Date();
                this.updatedAt = +new Date();
                this.isActive = this.isActive === undefined ? true : this.isActive;
            }
        }
    };
    __decorate([
        class_transformer_1.Expose(),
        typeorm_1.ObjectIdColumn(),
        __metadata("design:type", String)
    ], UserEntity.prototype, "_id", void 0);
    __decorate([
        class_transformer_1.Expose(),
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], UserEntity.prototype, "password", void 0);
    __decorate([
        class_transformer_1.Expose(),
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], UserEntity.prototype, "firstname", void 0);
    __decorate([
        class_transformer_1.Expose(),
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], UserEntity.prototype, "lastname", void 0);
    __decorate([
        class_transformer_1.Expose(),
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], UserEntity.prototype, "email", void 0);
    __decorate([
        class_transformer_1.Expose(),
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], UserEntity.prototype, "gender", void 0);
    __decorate([
        class_transformer_1.Expose(),
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], UserEntity.prototype, "phoneNumber", void 0);
    __decorate([
        class_transformer_1.Expose(),
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], UserEntity.prototype, "birthday", void 0);
    __decorate([
        class_transformer_1.Expose(),
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], UserEntity.prototype, "avatar", void 0);
    __decorate([
        class_transformer_1.Expose(),
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], UserEntity.prototype, "coverPhoto", void 0);
    __decorate([
        class_transformer_1.Expose(),
        typeorm_1.Column(),
        __metadata("design:type", _generator_1.Expert)
    ], UserEntity.prototype, "expert", void 0);
    __decorate([
        class_transformer_1.Expose(),
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], UserEntity.prototype, "createdAt", void 0);
    __decorate([
        class_transformer_1.Expose(),
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], UserEntity.prototype, "updatedAt", void 0);
    __decorate([
        class_transformer_1.Expose(),
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], UserEntity.prototype, "updatedBy", void 0);
    __decorate([
        class_transformer_1.Expose(),
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], UserEntity.prototype, "deletedAt", void 0);
    __decorate([
        class_transformer_1.Expose(),
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], UserEntity.prototype, "deletedBy", void 0);
    __decorate([
        class_transformer_1.Expose(),
        typeorm_1.Column(),
        __metadata("design:type", Boolean)
    ], UserEntity.prototype, "isActive", void 0);
    UserEntity = UserEntity_1 = __decorate([
        typeorm_1.Entity('users'),
        __metadata("design:paramtypes", [Object])
    ], UserEntity);
    return UserEntity;
})();
exports.UserEntity = UserEntity;
//# sourceMappingURL=user.entity.js.map