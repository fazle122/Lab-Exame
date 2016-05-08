var App;
(function (App) {
    var CourseController = (function () {
        function CourseController(service, url, web) {
            this.CommandService = service;
            this.Url = url;
            this.Web = web;
        }
        CourseController.prototype.Save = function () {
            var self = this;
            var successCallBack = function (response) {
                console.log(response);
            };
            var errorCallBack = function (error) {
                console.log(error);
            };
            self.Web.Post(self.Url.CourseEntryUrl, self.Model).then(successCallBack, errorCallBack);
        };
        CourseController.$inject = ["CommandService", "UrlService", "WebService"];
        return CourseController;
    })();
    App.CourseController = CourseController;
    angular.module("app").controller("CourseController", CourseController);
})(App || (App = {}));
//# sourceMappingURL=CourseController.js.map