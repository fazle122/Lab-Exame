var App;
(function (App) {
    var CommandService = (function () {
        function CommandService(q, url, web) {
            this.QService = q;
            this.UrlService = url;
            this.WebService = web;
            console.log("this is from Commandservice");
        }
        CommandService.prototype.Save = function (url, data) {
            var self = this;
            var deffered = self.QService.defer();
            var successCallBack = function (result) {
                var response = new App.BaseResponse(true, result.data, "success");
                return deffered.resolve(response);
            };
            var errorCallBack = function (error) {
                return deffered.reject(error);
            };
            self.WebService.Post(url, data).then(successCallBack, errorCallBack);
            return deffered.promise;
        };
        CommandService.prototype.Update = function (url, data) {
            var self = this;
            var deffered = self.QService.defer();
            var successCallBack = function (result) {
                var response = new App.BaseResponse(true, result.data, "success");
                return deffered.resolve(response);
            };
            var errorCallBack = function (error) {
                return deffered.reject(error);
            };
            self.WebService.Update(url, data).then(successCallBack, errorCallBack);
            return deffered.promise;
        };
        CommandService.prototype.Delete = function (url, id) {
            var self = this;
            var deffered = self.QService.defer();
            var successCallBack = function (result) {
                var response = new App.BaseResponse(true, result.data, "success");
                return deffered.resolve(response);
            };
            var errorCallBack = function (error) {
                return deffered.reject(error);
            };
            self.WebService.Delete(url + "?id=" + id).then(successCallBack, errorCallBack);
            return deffered.promise;
        };
        CommandService.$inject = ["$q", "UrlService", "WebService"];
        return CommandService;
    })();
    App.CommandService = CommandService;
    angular.module("app").service("CommandService", CommandService);
})(App || (App = {}));
//# sourceMappingURL=CommandService.js.map