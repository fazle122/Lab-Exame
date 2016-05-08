var App;
(function (App) {
    "use strict";
    var MenuController = (function () {
        function MenuController($location, $rootScope, authService, $state) {
            this.$location = $location;
            this.IsSignedIn = false;
            var self = this;
            self.authService = authService;
            self.stateService = $state;
            self.rootScopeService = $rootScope;
            self.rootScopeService.$on("SignedIn", function (event, args) {
                self.Activate();
            });
            self.rootScopeService.$on("SignedOut", function (event, args) {
                self.Activate();
                self.loadUser();
            });
            self.Activate();
        }
        MenuController.prototype.Activate = function () {
            var self = this;
            var acc = self.authService.AccountInfo;
            if (acc && acc.IsAuth) {
                self.loadUser();
                self.IsSignedIn = true;
                self.Routes = self.User.Routes;
            }
            else {
                self.IsSignedIn = false;
                self.Routes = [];
            }
        };
        MenuController.prototype.LoadSideMenu = function (s) {
            var self = this;
            if (self.Routes) {
                for (var i = 0; i < self.Routes.length; i++) {
                    if (self.Routes[i] === s) {
                        return true;
                    }
                }
            }
            return false;
        };
        MenuController.prototype.loadUser = function () {
            var self = this;
            self.User = this.authService.AccountInfo;
            self.IsSignedIn = this.authService.IsSignedIn();
        };
        MenuController.$inject = ["$location", "$rootScope", "AuthService", "$state"];
        return MenuController;
    })();
    App.MenuController = MenuController;
    angular.module("app").controller("MenuController", MenuController);
})(App || (App = {}));
//# sourceMappingURL=MenuController.js.map