
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export enum Gender {
    MALE = "MALE",
    FEMALE = "FEMALE",
    ORTHER = "ORTHER"
}

export class NewUser {
    email?: string;
    password?: string;
    firstname?: string;
    lastname?: string;
    gender?: Gender;
    birthday?: number;
    expert?: NewExpert;
}

export class EditUser {
    coverPhoto?: string;
    avatar?: string;
}

export class NewExpert {
    areasOfExpertise?: string;
    jobTitle?: string;
    yearsExperience?: number;
    isVerify?: boolean;
}

export class FacebookAuthData {
    accessToken?: string;
    userID?: string;
}

export abstract class IQuery {
    abstract hello(): string | Promise<string>;

    abstract me(): User | Promise<User>;

    abstract getUser(userId?: string): User | Promise<User>;
}

export abstract class IMutation {
    abstract signUp(newUser?: NewUser): boolean | Promise<boolean>;

    abstract signIn(email?: string, password?: string): AuthRespone | Promise<AuthRespone>;

    abstract signInWithGoogle(token?: string): AuthRespone | Promise<AuthRespone>;

    abstract signInWithFacebook(facebookAuthData?: FacebookAuthData): AuthRespone | Promise<AuthRespone>;

    abstract updateUser(userId?: string, editUser?: EditUser): boolean | Promise<boolean>;
}

export class User {
    _id?: string;
    password?: string;
    firstname?: string;
    lastname?: string;
    avatar?: string;
    coverPhoto?: string;
    email?: string;
    gender?: Gender;
    phoneNumber?: string;
    birthday?: number;
    expert?: Expert;
    isActive?: boolean;
    createdAt?: number;
    updatedAt?: number;
    updatedBy?: string;
    deletedAt?: number;
    deletedBy?: string;
}

export class Expert {
    areasOfExpertise?: string;
    jobTitle?: string;
    yearsExperience?: number;
    isVerify?: boolean;
}

export class AuthRespone {
    accessToken?: string;
}
