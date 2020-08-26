"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SENDGRID_API_KEY = exports.GOOGLE_CLIENT_ID = exports.FB_APP_SECRET = exports.FB_APP_ID = exports.MONGODB_URL = exports.ENDPOINT = exports.JWT_SECRECT_KEY = exports.PORT = void 0;
require('dotenv').config();
const PORT = process.env.PORT || 3000;
exports.PORT = PORT;
const JWT_SECRECT_KEY = process.env.JWT_SECRECT_KEY || 'default';
exports.JWT_SECRECT_KEY = JWT_SECRECT_KEY;
const ENDPOINT = process.env.ENDPOINT || 'graphqlfamily';
exports.ENDPOINT = ENDPOINT;
const MONGODB_URL = process.env.MONGODB_URL || 'mongodb+srv://admin:fYivEVbVcKOGYDgg@family-test-db-lx3fm.mongodb.net/test?retryWrites=true&w=majority';
exports.MONGODB_URL = MONGODB_URL;
const FB_APP_ID = process.env.FB_APP_ID || '';
exports.FB_APP_ID = FB_APP_ID;
const FB_APP_SECRET = process.env.FB_APP_SECRET || '';
exports.FB_APP_SECRET = FB_APP_SECRET;
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID || '';
exports.GOOGLE_CLIENT_ID = GOOGLE_CLIENT_ID;
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY || '';
exports.SENDGRID_API_KEY = SENDGRID_API_KEY;
//# sourceMappingURL=index.js.map