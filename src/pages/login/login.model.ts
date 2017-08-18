//Mick Created 18/8/60 12.50 pm.
export class UserModel {
    userdata: Array<UserItem>;
}
export class UserItem {
    _id: string;
    created: string;
    displayName: string;
    email: string;
    firstName: string;
    lastName: string;
    username: string;
    password: string;
    profileImageURL: string;
    provider: string;
    roles: Array<any>;
}

