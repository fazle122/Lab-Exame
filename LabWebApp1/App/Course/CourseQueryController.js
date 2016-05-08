var App;
(function (App) {
    var CourseQueryController = (function () {
        function CourseQueryController($location, web, url, search, save, dropdownService, $state, $stateParams) {
            this.$location = $location;
            this.Url = url;
            this.QueryService = search;
            this.CommandService = save;
            this.stateService = $state;
            this.Web = web;
            this.stateParams = $stateParams;
            this.Get();
        }
        CourseQueryController.prototype.Get = function () {
            var self = this;
            var successCallBack = function (result) {
                self.Models = result.data;
                console.log("data");
            };
            var errorCallBack = function (error) {
                console.log(error);
            };
            self.Web.Get(self.Url.CourseQueryUrl).then(successCallBack, errorCallBack);
        };
        CourseQueryController.$inject = ["$location", "WebService", "UrlService", "QueryService", "CommandService", "DropdownService", "$state", "$stateParams"];
        return CourseQueryController;
    })();
    App.CourseQueryController = CourseQueryController;
    angular.module("app").controller("CourseQueryController", CourseQueryController);
})(App || (App = {}));
//# sourceMappingURL=CourseQueryController.js.map