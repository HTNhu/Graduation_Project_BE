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
exports.Mailer = void 0;
const fs = __importStar(require("fs"));
const sgMail = __importStar(require("@sendgrid/mail"));
const Handlebars = __importStar(require("handlebars"));
const _environment_1 = require("../../environment");
const _common_1 = require("../../common");
class Mailer {
    async sendMail(template, subject, to, replacement) {
        const templateEmail = {
            GENERATE_PASSWORD: 'generatePassword.html'
        };
        fs.readFile(`src/assets/template/${templateEmail[template]}`, {
            encoding: 'utf8'
        }, (err, data) => {
            if (err) {
                throw new Error(err.message);
            }
            const templateHandle = Handlebars.compile(data);
            const html = templateHandle(Object.assign({}, replacement));
            sgMail.setApiKey(_environment_1.SENDGRID_API_KEY);
            const mail = {
                from: 'hotro01.giadinh@gmail.com',
                to: to.toLocaleString(),
                subject,
                html
            };
            sgMail.send(mail);
        });
    }
}
exports.Mailer = Mailer;
//# sourceMappingURL=index.js.map