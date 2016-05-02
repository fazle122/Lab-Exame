module App {

    export class UserInfoViewModel {
        Name: string;
        Age: number;;
        Phone: string;
        Email: string;
        Address: string;
    }

    export class ChangePasswordModel extends Entity {
        constructor() {
            super();
        }
        OldPassword: string;
        NewPassword: string;
        ConfirmPassword: number;
    }


}