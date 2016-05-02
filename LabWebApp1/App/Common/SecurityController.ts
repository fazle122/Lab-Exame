module App {

    export class SignInController {
        User: SigninRequest;
        private authService: AuthService;
        private stateService: angular.ui.IStateService;
        private rootScopeService: angular.IRootScopeService;

        static $inject = ["AuthService", "$state", "$rootScope"];

        constructor(authService: AuthService, $state: angular.ui.IStateService, $rootScope: angular.IRootScopeService) {
            this.authService = authService;
            this.stateService = $state;
            this.rootScopeService = $rootScope;
            var acount = this.authService.AccountInfo;
            if (acount && acount.IsAuth) {
                this.stateService.go("root.home");
            }
        }

        Signin(): void {
            var self = this;

            var successCallBack = (response: AccountInfo): void => {
                self.stateService.go("root.home");
                self.rootScopeService.$broadcast("SignIn");
            }

            var errorCallBack = (error: any): void => {
                console.log(error);
            }

            self.authService.Signin(new SigninRequest(self.User.Email, self.User.Password)).then(successCallBack, errorCallBack);
        }
    }

    angular.module("app").controller("SignInController", SignInController);


    export class RegisterController {
        User: RegisterRequest;
        private authService: AuthService;
        private stateService: angular.ui.IStateService;

        static $inject = ["AuthService", "$state"];

        constructor(
            authService: AuthService, $state: angular.ui.IStateService) {
            this.authService = authService;
            this.stateService = $state;
            var acc = this.authService.AccountInfo;
            if (acc && acc.IsAuth) {
                this.stateService.go("root.home");
            }
        }

        Register(): void {
            var self = this;

            var successCallBack = (response: RegisterResponse): any => {
                self.stateService.go("root.signin");
                return response;
            }

            var errorCallBack = (error: any): void => {
                console.log(error);
            }

            self.authService.Register(self.User).then(successCallBack, errorCallBack);
        }
    }

    angular.module("app").controller("RegisterController", RegisterController);


    export class NavController {
        private authService: AuthService;
        User: AccountInfo;
        private stateService: angular.ui.IStateService;
        IsSignedIn: boolean;
        private rootScopeService: angular.IRootScopeService;

        static $inject = ["AuthService", "$state", "$rootScope"];

        constructor(authService: AuthService, $state: angular.ui.IStateService, $rootScope: angular.IRootScopeService) {
            var self = this;
            self.authService = authService;
            self.stateService = $state;
            self.rootScopeService = $rootScope;
            var acc = self.authService.AccountInfo;
            if (acc && acc.IsAuth) {
                self.loadUser();
                console.log(acc);
            } else {
                self.IsSignedIn = false;
            }
            self.rootScopeService.$on("SignIn", (event, args) => {
                self.loadUser();
            });
        }

        private loadUser(): void {
            var self = this;
            self.User = this.authService.AccountInfo;
            self.IsSignedIn = this.authService.IsSignedIn();
        }

        Signout(): void {
            var self = this;
            self.authService.Signout();
            self.loadUser();
            self.stateService.go("root.signin");
            self.rootScopeService.$broadcast("SignedOut");
        }
    }
    angular.module("app").controller("NavController", NavController);
    
}