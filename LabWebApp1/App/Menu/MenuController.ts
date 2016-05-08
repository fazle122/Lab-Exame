
module App {
    "use strict";

    export class MenuController {
        User: AccountInfo;
        private stateService: angular.ui.IStateService;
        IsSignedIn: boolean = false;
        private rootScopeService: angular.IRootScopeService;
        private authService: AuthService;
        Routes: string[];
        static $inject: string[] = ["$location", "$rootScope", "AuthService", "$state"];

        constructor(private $location: angular.ILocationService, $rootScope: angular.IRootScopeService, authService: AuthService, $state: angular.ui.IStateService) {
            var self = this;
            self.authService = authService;
            self.stateService = $state;
            self.rootScopeService = $rootScope;

            self.rootScopeService.$on("SignedIn", (event, args) => {
                self.Activate();

            });
            self.rootScopeService.$on("SignedOut", (event, args) => {
                self.Activate();
                self.loadUser();
            });
            self.Activate();
            
            
        }

        Activate() {
            var self = this;
            var acc = self.authService.AccountInfo;
            if (acc && acc.IsAuth) {
                self.loadUser();
                self.IsSignedIn = true;
                self.Routes = self.User.Routes;
            } else {
                self.IsSignedIn = false;
                self.Routes = [];
            }
        }

        LoadSideMenu(s: string): boolean {
            var self = this;
            if (self.Routes) {
                for (var i = 0; i < self.Routes.length; i++) {
                    if (self.Routes[i] === s) {
                        return true;
                    }
                }
            }
            
            return false;
        }

        private loadUser(): void {
            var self = this;
            self.User = this.authService.AccountInfo;
            self.IsSignedIn = this.authService.IsSignedIn();
        }

    }

    angular.module("app").controller("MenuController", MenuController);
}