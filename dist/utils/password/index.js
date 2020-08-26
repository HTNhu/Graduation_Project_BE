"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasswordUtils = void 0;
const bcrypt_1 = require("bcrypt");
const _constants_1 = require("../../constants");
class PasswordUtils {
    async hashPassword(plaintextPassword) {
        return await bcrypt_1.hash(plaintextPassword, _constants_1.SALT_ROUNDS);
    }
    async comparePassword(password, hashPassword) {
        return await bcrypt_1.compare(password, hashPassword);
    }
    async generatePassword(length) {
        return Math.random().toString(32).slice(length * -1.0);
    }
}
exports.PasswordUtils = PasswordUtils;
//# sourceMappingURL=index.js.map