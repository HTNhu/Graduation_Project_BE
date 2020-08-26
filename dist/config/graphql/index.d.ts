import { GqlModuleOptions, GqlOptionsFactory } from '@nestjs/graphql';
export declare class GraphQLConfiguration implements GqlOptionsFactory {
    private authService;
    createGqlOptions(): Promise<GqlModuleOptions>;
}
