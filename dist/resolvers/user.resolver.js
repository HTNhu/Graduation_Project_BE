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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserResolver = void 0;
const apollo_server_express_1 = require("apollo-server-express");
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("typeorm");
const axios_1 = __importDefault(require("axios"));
const google_auth_library_1 = require("google-auth-library");
const _auth_1 = require("../auth");
const _generator_1 = require("../generator/graphql.schema");
const _entities_1 = require("../entities");
const _utils_1 = require("../utils");
const _constants_1 = require("../constants");
const _environment_1 = require("../environment");
let UserResolver = (() => {
    let UserResolver = class UserResolver {
        constructor(authService, passwordUtils, mailer) {
            this.authService = authService;
            this.passwordUtils = passwordUtils;
            this.mailer = mailer;
        }
        async me(currentUser) {
            return currentUser;
        }
        async signUp(newUser) {
            const userRepository = typeorm_1.getMongoRepository(_entities_1.UserEntity);
            const userFound = await userRepository.findOne({
                email: newUser.email
            });
            if (!!userFound) {
                throw new apollo_server_express_1.ForbiddenError('Email has already been registered!');
            }
            const hashedPassword = await this.passwordUtils.hashPassword(newUser.password);
            const userCreated = await userRepository.save(new _entities_1.UserEntity(Object.assign(Object.assign({}, newUser), { password: hashedPassword })));
            return !!userCreated;
        }
        async signIn(email, password) {
            const userFound = await typeorm_1.getMongoRepository(_entities_1.UserEntity).findOne({
                email,
                isActive: true
            });
            if (!userFound) {
                throw new apollo_server_express_1.AuthenticationError('Email or password is invalid');
            }
            const match = await this.passwordUtils.comparePassword(password, userFound.password);
            if (!match) {
                throw new apollo_server_express_1.AuthenticationError('Email or password is invalid');
            }
            const accessToken = await this.authService.generateToken(userFound._id);
            return { accessToken };
        }
        async signInWithFacebook(facebookAuthData) {
            const userRepository = typeorm_1.getMongoRepository(_entities_1.UserEntity);
            const FB_GRAPH_API_URL = `${_constants_1.FB_GRAPH_API_HOST}/${_constants_1.FB_GRAPH_API_VER}`;
            const req = await axios_1.default.get(`${FB_GRAPH_API_URL}/${facebookAuthData.userID}?fields=name,first_name,last_name,birthday,email,gender,link,picture&access_token=${facebookAuthData.accessToken}`);
            const userData = req.data;
            const userFound = await userRepository.findOne({ email: userData.email });
            if (userFound) {
                const accessToken = await this.authService.generateToken(userFound._id);
                return { accessToken };
            }
            else {
                const userCreated = await userRepository.save(new _entities_1.UserEntity({
                    email: userData.email,
                    firstname: userData.first_name,
                    lastname: userData.last_name,
                    birthday: +new Date(userData.birthday),
                    gender: userData.gender.toUpperCase(),
                    avatar: userData.picture.data.url
                }));
                if (!!userCreated._id) {
                    const accessToken = await this.authService.generateToken(userCreated._id);
                    return { accessToken };
                }
            }
        }
        async signInWithGoogle(token) {
            const userRepository = typeorm_1.getMongoRepository(_entities_1.UserEntity);
            const client = new google_auth_library_1.OAuth2Client(_environment_1.GOOGLE_CLIENT_ID);
            const authRespone = await client.verifyIdToken({
                idToken: token,
                audience: _environment_1.GOOGLE_CLIENT_ID
            });
            const { email, given_name, family_name, picture } = authRespone.getPayload();
            const userFound = await userRepository.findOne({ email });
            if (userFound) {
                const accessToken = await this.authService.generateToken(userFound._id);
                return { accessToken };
            }
            else {
                const userCreated = await userRepository.save(new _entities_1.UserEntity({
                    email: email,
                    firstname: given_name,
                    lastname: family_name,
                    avatar: picture
                }));
                if (!!userCreated._id) {
                    const accessToken = await this.authService.generateToken(userCreated._id);
                    return { accessToken };
                }
            }
        }
        async getUser(userId) {
            const userRepository = typeorm_1.getMongoRepository(_entities_1.UserEntity);
            const userFound = await userRepository.findOne({ _id: userId });
            console.log(userFound);
            return userFound;
        }
        async updateUser(userId, editUser) {
            const userRepository = typeorm_1.getMongoRepository(_entities_1.UserEntity);
            const userFound = await userRepository.findOne({ _id: userId });
            if (userFound)
                userRepository.save(new _entities_1.UserEntity(Object.assign(Object.assign({}, userFound), editUser)));
        }
    };
    __decorate([
        graphql_1.Query(),
        __param(0, graphql_1.Context('currentUser')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [_entities_1.UserEntity]),
        __metadata("design:returntype", Promise)
    ], UserResolver.prototype, "me", null);
    __decorate([
        graphql_1.Mutation(),
        __param(0, graphql_1.Args('newUser')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [_generator_1.NewUser]),
        __metadata("design:returntype", Promise)
    ], UserResolver.prototype, "signUp", null);
    __decorate([
        graphql_1.Mutation(),
        __param(0, graphql_1.Args('email')),
        __param(1, graphql_1.Args('password')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", Promise)
    ], UserResolver.prototype, "signIn", null);
    __decorate([
        graphql_1.Mutation(),
        __param(0, graphql_1.Args('facebookAuthData')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [_generator_1.FacebookAuthData]),
        __metadata("design:returntype", Promise)
    ], UserResolver.prototype, "signInWithFacebook", null);
    __decorate([
        graphql_1.Mutation(),
        __param(0, graphql_1.Args('token')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], UserResolver.prototype, "signInWithGoogle", null);
    __decorate([
        graphql_1.Query(),
        __param(0, graphql_1.Args('userId')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], UserResolver.prototype, "getUser", null);
    __decorate([
        graphql_1.Mutation(),
        __param(0, graphql_1.Args('userId')),
        __param(1, graphql_1.Args('editUser')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, _generator_1.EditUser]),
        __metadata("design:returntype", Promise)
    ], UserResolver.prototype, "updateUser", null);
    UserResolver = __decorate([
        graphql_1.Resolver('User'),
        __metadata("design:paramtypes", [_auth_1.AuthService,
            _utils_1.PasswordUtils,
            _utils_1.Mailer])
    ], UserResolver);
    return UserResolver;
})();
exports.UserResolver = UserResolver;
//# sourceMappingURL=user.resolver.js.map