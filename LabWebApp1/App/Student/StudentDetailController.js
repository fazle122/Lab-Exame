var App;
(function (App) {
    var StudentDetailController = (function () {
        function StudentDetailController($location, web, url, search, save, dropdownService, $state, $stateParams) {
            this.$location = $location;
            this.Url = url;
            this.QueryService = search;
            this.CommandService = save;
            this.stateService = $state;
            this.Web = web;
            this.stateParams = $stateParams;
            this.Dropdown = new Object();
            this.DropdownService = dropdownService;
            this.Activate();
        }
        StudentDetailController.prototype.Activate = function () {
            this.IsUpdateMode = false;
            this.Models = [];
            this.TotalDue = 0;
            this.SearchRequest = new App.SearchRequest("", "Name", "False", "");
            this.Get();
        };
        StudentDetailController.prototype.Update = function () {
            var self = this;
            var successCallBack = function (response) {
                console.log(response);
            };
            var errorCallBack = function (error) {
                console.log(error);
            };
            self.CommandService.Update(self.Url.StudentEntryUrl, self.Model).then(successCallBack, errorCallBack);
        };
        StudentDetailController.prototype.Delete = function (id) {
            var self = this;
            var successCallback = function (response) {
                self.Activate();
            };
            var errorCallback = function (error) {
                console.log(error);
            };
            self.CommandService.Delete(self.Url.StudentEntryUrl, id).then(successCallback, errorCallback);
        };
        StudentDetailController.prototype.Get = function () {
            var self = this;
            var successCallBack = function (result) {
                self.Models = result.data;
                self.TotalDue = 0;
                for (var t = 0; t < self.Models.length; t++) {
                    self.TotalDue += self.Models[t].Due;
                }
                console.log("data");
            };
            var errorCallBack = function (error) {
                console.log(error);
            };
            self.Web.Get(self.Url.StudentDetailUrl).then(successCallBack, errorCallBack);
        };
        StudentDetailController.prototype.Edit = function (t) {
            this.Model = t;
            this.IsUpdateMode = true;
        };
        StudentDetailController.prototype.Select = function (t) {
            console.log(t);
            this.Model = t;
            console.log(this.Model);
        };
        StudentDetailController.prototype.LoadDropdown = function (name) {
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
        StudentDetailController.$inject = ["$location", "WebService", "UrlService", "QueryService", "CommandService", "DropdownService", "$state", "$stateParams"];
        return StudentDetailController;
    })();
    App.StudentDetailController = StudentDetailController;
    angular.module("app").controller("StudentDetailController", StudentDetailController);
})(App || (App = {}));
//# sourceMappingURL=StudentDetailController.js.map