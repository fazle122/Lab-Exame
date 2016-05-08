var App;
(function (App) {
    var SignInController = (function () {
        function SignInController(authService, $state, $rootScope) {
            this.authService = authService;
            this.stateService = $state;
            this.rootScopeService = $rootScope;
            var acount = this.authService.AccountInfo;
            if (acount && acount.IsAuth) {
                this.stateService.go("root.home");
            }
        }
        SignInController.prototype.Signin = function () {
            var self = this;
            var successCallBack = function (response) {
                self.stateService.go("root.home");
                self.rootScopeService.$broadcast("SignIn");
                console.log(response);
            };
            var errorCallBack = function (error) {
                console.log(error);
            };
            self.authService.Signin(new App.SigninRequest(self.User.Email, self.User.Password)).then(successCallBack, errorCallBack);
        };
        SignInController.$inject = ["AuthService", "$state", "$rootScope"];
        return SignInController;
    })();
    App.SignInController = SignInController;
    angular.module("app").controller("SignInController", SignInController);
    var RegisterController = (function () {
        function RegisterController(authService, $state) {
            this.authService = authService;
            this.stateService = $state;
            var acc = this.authService.AccountInfo;
            if (acc && acc.IsAuth) {
                this.stateService.go("root.home");
            }
        }
        RegisterController.prototype.Register = function () {
            var self = this;
            var successCallBack = function (response) {
                self.stateService.go("root.signin");
                return response;
            };
            var errorCallBack = function (error) {
                console.log(error);
            };
            self.authService.Register(self.User).then(successCallBack, errorCallBack);
        };
        RegisterController.$inject = ["AuthService", "$state"];
        return RegisterController;
    })();
    App.RegisterController = RegisterController;
    angular.module("app").controller("RegisterController", RegisterController);
    var NavController = (function () {
        function NavController(authService, $state, $rootScope) {
            var self = this;
            self.authService = authService;
            self.stateService = $state;
            self.rootScopeService = $rootScope;
            var acc = self.authService.AccountInfo;
            if (acc && acc.IsAuth) {
                self.loadUser();
            }
            else {
                self.IsSignedIn = false;
            }
            self.rootScopeService.$on("SignIn", function (event, args) {
                self.loadUser();
            });
        }
        NavController.prototype.loadUser = function () {
            var self = this;
            self.User = this.authService.AccountInfo;
            self.IsSignedIn = this.authService.IsSignedIn();
        };
        NavController.prototype.Signout = function () {
            var self = this;
            self.authService.Signout();
            self.loadUser();
            self.stateService.go("root.signin");
            self.rootScopeService.$broadcast("SignedOut");
        };
        NavController.$inject = ["AuthService", "$state", "$rootScope"];
        return NavController;
    })();
    App.NavController = NavController;
    angular.module("app").controller("NavController", NavController);
})(App || (App = {}));
//# sourceMappingURL=SecurityController.js.map