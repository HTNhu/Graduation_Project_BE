import { Expert } from '@generator';
export declare class UserEntity {
    _id: string;
    password: string;
    firstname: string;
    lastname: string;
    email: string;
    gender: string;
    phoneNumber: string;
    birthday: number;
    avatar: string;
    coverPhoto: string;
    expert: Expert;
    createdAt: number;
    updatedAt: number;
    updatedBy: string;
    deletedAt: number;
    deletedBy: string;
    isActive: boolean;
    constructor(user: Partial<UserEntity>);
}
