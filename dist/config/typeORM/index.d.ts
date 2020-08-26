import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';
export declare class TypeORMConfiguration implements TypeOrmOptionsFactory {
    createTypeOrmOptions(): Promise<TypeOrmModuleOptions>;
}
