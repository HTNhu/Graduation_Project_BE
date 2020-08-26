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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const jwt = __importStar(require("jsonwebtoken"));
const _environment_1 = require("../environment");
const typeorm_1 = require("typeorm");
const apollo_server_express_1 = require("apollo-server-express");
const _entities_1 = require("../entities");
class AuthService {
    async verifyToken(token) {
        const decoded = await jwt.verify(token, _environment_1.JWT_SECRECT_KEY);
        const { userId } = decoded;
        const user = await typeorm_1.getMongoRepository(_entities_1.UserEntity).findOne({ _id: userId });
        if (!user) {
            throw new apollo_server_express_1.AuthenticationError('Invalid token!');
        }
        return { currentUser: user };
    }
    async generateToken(userId) {
        return jwt.sign({ userId }, _environment_1.JWT_SECRECT_KEY, {
            expiresIn: '30d'
        });
    }
}
exports.AuthService = AuthService;
//# sourceMappingURL=index.js.map