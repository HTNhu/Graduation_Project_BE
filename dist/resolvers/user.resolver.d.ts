import { AuthService } from '@auth';
import { NewUser, AuthRespone, FacebookAuthData, EditUser } from '@generator';
import { UserEntity } from '@entities';
import { PasswordUtils, Mailer } from '@utils';
export declare class UserResolver {
    private readonly authService;
    private readonly passwordUtils;
    private readonly mailer;
    constructor(authService: AuthService, passwordUtils: PasswordUtils, mailer: Mailer);
    me(currentUser: UserEntity): Promise<UserEntity>;
    signUp(newUser: NewUser): Promise<boolean>;
    signIn(email: string, password: string): Promise<AuthRespone>;
    signInWithFacebook(facebookAuthData: FacebookAuthData): Promise<AuthRespone>;
    signInWithGoogle(token: string): Promise<AuthRespone>;
    getUser(userId: string): Promise<UserEntity>;
    updateUser(userId: string, editUser: EditUser): Promise<void>;
}
