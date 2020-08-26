import { UserEntity } from '@entities';
export declare class AuthService {
    verifyToken(token: string): Promise<{
        currentUser: UserEntity;
    }>;
    generateToken(userId: string): Promise<any>;
}
