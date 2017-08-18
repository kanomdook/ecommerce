export class UserModel {
    displayName: string;
    firstName: string;
    lastName: string;
    email: string;
    profileImageURL: string;
    provider: string;
}

export class ProfileModel {
    user: UserModel = new UserModel();
    title: string;
}
