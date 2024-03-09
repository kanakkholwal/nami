type UserType = {
    _id: string;
    name: string;
    username: string;
    email: string;
    password?: string;
    role: string;
    createdAt: string;
    profilePicture:string;
    account_type: string;
    verificationToken: string| null;
    verified: boolean;
    __v?: number;
}
type SessionUserType = {
    _id: string;
    name: string;
    username: string;
    email: string;
    role: string;
    profilePicture: string;
    account_type: string;
    verificationToken: string|null;
    verified: boolean;
    providers: string[];
}

export type { SessionUserType, UserType };

