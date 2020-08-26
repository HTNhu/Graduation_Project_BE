import { TemplateEmail } from '@common';
export declare class Mailer {
    sendMail(template: TemplateEmail, subject: string, to: string[], replacement: any): Promise<void>;
}
