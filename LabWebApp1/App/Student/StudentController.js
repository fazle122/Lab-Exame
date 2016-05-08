var App;
(function (App) {
    var StudentController = (function () {
        function StudentController(service, url, web, dropdown) {
            this.CommandService = service;
            this.Url = url;
            this.Web = web;
            this.DropdownService = dropdown;
            this.Dropdown = new Object();
            this.LoadDropdown("course");
        }
        StudentController.prototype.Save = function () {
            var self = this;
            var successCallBack = function (response) {
                console.log(response);
            };
            var errorCallBack = function (error) {
                console.log(error);
            };
            self.Web.Post(self.Url.StudentEntryUrl, self.Model).then(successCallBack, errorCallBack);
        };
        StudentController.prototype.LoadDropdown = function (name) {
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
        StudentController.$inject = ["CommandService", "UrlService", "WebService", "DropdownService"];
        return StudentController;
    })();
    App.StudentController = StudentController;
    angular.module("app").controller("StudentController", StudentController);
})(App || (App = {}));
//# sourceMappingURL=StudentController.js.map