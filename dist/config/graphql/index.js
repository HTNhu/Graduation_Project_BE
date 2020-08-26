"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GraphQLConfiguration = void 0;
const graphql_subscriptions_1 = require("graphql-subscriptions");
const apollo_server_express_1 = require("apollo-server-express");
const _auth_1 = require("../../auth");
const _environment_1 = require("../../environment");
const pubSub = new graphql_subscriptions_1.PubSub();
class GraphQLConfiguration {
    constructor() {
        this.authService = new _auth_1.AuthService();
    }
    async createGqlOptions() {
        const directiveResolvers = {
            isAuthenticated: (next, source, args, ctx) => {
                const { currentUser } = ctx;
                if (!currentUser) {
                    throw new apollo_server_express_1.AuthenticationError('Missing or invalid token!');
                }
                return next();
            },
            isAdmin: (next, source, args, ctx) => {
                const { currentUser } = ctx;
                if (!currentUser.isAdmin) {
                    throw new apollo_server_express_1.AuthenticationError('Missing or invalid token!');
                }
                return next();
            }
        };
        return {
            typePaths: ['./**/*.graphql'],
            installSubscriptionHandlers: true,
            path: `/${_environment_1.ENDPOINT}`,
            directiveResolvers,
            context: async ({ req, res, connection }) => {
                if (connection) {
                    return {
                        req: connection.context,
                        pubSub
                    };
                }
                const token = req.headers['access-token'];
                let ctx = {};
                if (token) {
                    ctx = await this.authService.verifyToken(token);
                }
                return Object.assign({ req, res, pubSub }, ctx);
            },
            subscriptions: {
                path: `/${_environment_1.ENDPOINT}`,
                keepAlive: 1000,
                onConnect: async (connectionParams) => {
                    const token = connectionParams['access-token'];
                    if (token) {
                        const ctx = await this.authService.verifyToken(token);
                        return Object.assign({}, ctx);
                    }
                    throw new apollo_server_express_1.AuthenticationError('Missing auth token!');
                }
            },
            playground: process.env.NODE_ENV === 'development',
            formatError: ({ message, path, locations, extensions: { code } }) => ({
                message,
                path,
                locations,
                code
            })
        };
    }
}
exports.GraphQLConfiguration = GraphQLConfiguration;
//# sourceMappingURL=index.js.map