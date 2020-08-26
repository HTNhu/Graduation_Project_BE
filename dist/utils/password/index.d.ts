export declare class PasswordUtils {
    hashPassword(plaintextPassword: string): Promise<string>;
    comparePassword(password: string, hashPassword: string): Promise<boolean>;
    generatePassword(length: number): Promise<string>;
}
