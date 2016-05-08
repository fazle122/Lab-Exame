var App;
(function (App) {
    var ProfileController = (function () {
        function ProfileController($location, url, search, save) {
            this.$location = $location;
            this.Url = url;
            this.QueryService = search;
            this.CommandService = save;
            this.Activate();
        }
        ProfileController.prototype.Activate = function () {
            this.User = new App.UserInfoViewModel();
            this.ChangePasswordModel = new App.ChangePasswordModel();
            this.GetUserInfo();
        };
        ProfileController.prototype.GetUserInfo = function () {
            var self = this;
            var successCallback = function (response) {
                console.log(response);
                self.User = response;
            };
            var errorCallback = function (error) {
                console.log(error);
            };
            self.QueryService.Get(self.Url.ProfileUrl).then(successCallback, errorCallback);
        };
        ProfileController.prototype.Update = function () {
            var self = this;
            var successCallback = function (response) {
                console.log(response);
            };
            var errorCallback = function (error) {
                console.log(error);
            };
            self.CommandService.Save(self.Url.ChangePasswordUrl, self.ChangePasswordModel).then(successCallback, errorCallback);
        };
        ProfileController.$inject = ["$location", "UrlService", "QueryService", "CommandService"];
        return ProfileController;
    })();
    App.ProfileController = ProfileController;
    angular.module("app").controller("ProfileController", ProfileController);
})(App || (App = {}));
//# sourceMappingURL=ProfileController.js.map