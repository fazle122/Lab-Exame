var App;
(function (App) {
    var PaymentController = (function () {
        function PaymentController($location, url, web, search, save, authService, dropdown, $state, $stateParams) {
            this.$location = $location;
            this.Url = url;
            this.WebService = web;
            this.QueryService = search;
            this.CommandService = save;
            this.authService = authService;
            this.DropdownService = dropdown;
            this.IsUpdateMode = false;
            this.Activate();
            var acc = this.authService.AccountInfo;
            if (acc && acc.IsAuth) {
                this.loadUser();
            }
        }
        PaymentController.prototype.Activate = function () {
            console.log('i m in PaymentController');
            this.IsUpdateMode = false;
            this.Models = [];
            this.Model = new App.Payment();
            this.Dropdown = new Object();
            this.LoadDropdown("student");
            this.Get();
        };
        PaymentController.prototype.loadUser = function () {
            var self = this;
            self.User = this.authService.AccountInfo;
        };
        PaymentController.prototype.Save = function () {
            var self = this;
            var successCallback = function (response) {
                console.log(response);
                self.Model = new App.Payment();
            };
            var errorCallback = function (error) {
                console.log(error);
            };
            self.CommandService.Save(self.Url.PaymentUrl, self.Model).then(successCallback, errorCallback);
        };
        PaymentController.prototype.Delete = function (id) {
            var self = this;
            var successCallback = function (response) {
                self.Activate();
            };
            var errorCallback = function (error) {
                console.log(error);
            };
            self.CommandService.Delete(self.Url.PaymentUrl, id).then(successCallback, errorCallback);
        };
        PaymentController.prototype.Get = function () {
            var self = this;
            var successCallBack = function (result) {
                self.Models = result.data;
                console.log("data");
            };
            var errorCallBack = function (error) {
                console.log(error);
            };
            self.WebService.Get(self.Url.PaymentQueryUrl).then(successCallBack, errorCallBack);
        };
        PaymentController.prototype.Edit = function (p) {
            this.Model = p;
            this.IsUpdateMode = true;
        };
        PaymentController.prototype.Select = function (p) {
            console.log(p);
            this.Model = p;
            this.Model.Id = p.Id;
            console.log(this.Model);
        };
        PaymentController.prototype.LoadDropdown = function (name) {
            var self = this;
            var successCallback = function (response) {
                console.log(response);
                self.Dropdown[name] = response.Models;
                console.log(self.Dropdown);
            };
            var errorCallback = function (error) {
                console.log(error);
            };
            self.DropdownService.Load(name).then(successCallback, errorCallback);
        };
        PaymentController.$inject = ["$location", "UrlService", "WebService", "QueryService", "CommandService", "AuthService", "DropdownService", "$state", "$stateParams"];
        return PaymentController;
    })();
    App.PaymentController = PaymentController;
    angular.module("app").controller("PaymentController", PaymentController);
})(App || (App = {}));
//# sourceMappingURL=PaymentController.js.map