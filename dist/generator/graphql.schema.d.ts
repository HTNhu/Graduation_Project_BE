export declare enum Gender {
    MALE = "MALE",
    FEMALE = "FEMALE",
    ORTHER = "ORTHER"
}
export declare class NewUser {
    email?: string;
    password?: string;
    firstname?: string;
    lastname?: string;
    gender?: Gender;
    birthday?: number;
    expert?: NewExpert;
}
export declare class EditUser {
    coverPhoto?: string;
    avatar?: string;
}
export declare class NewExpert {
    areasOfExpertise?: string;
    jobTitle?: string;
    yearsExperience?: number;
    isVerify?: boolean;
}
export declare class FacebookAuthData {
    accessToken?: string;
    userID?: string;
}
export declare abstract class IQuery {
    abstract hello(): string | Promise<string>;
    abstract me(): User | Promise<User>;
    abstract getUser(userId?: string): User | Promise<User>;
}
export declare abstract class IMutation {
    abstract signUp(newUser?: NewUser): boolean | Promise<boolean>;
    abstract signIn(email?: string, password?: string): AuthRespone | Promise<AuthRespone>;
    abstract signInWithGoogle(token?: string): AuthRespone | Promise<AuthRespone>;
    abstract signInWithFacebook(facebookAuthData?: FacebookAuthData): AuthRespone | Promise<AuthRespone>;
    abstract updateUser(userId?: string, editUser?: EditUser): boolean | Promise<boolean>;
}
export declare class User {
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
export declare class Expert {
    areasOfExpertise?: string;
    jobTitle?: string;
    yearsExperience?: number;
    isVerify?: boolean;
}
export declare class AuthRespone {
    accessToken?: string;
}
