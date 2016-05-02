var App;
(function (App) {
    var QueryService = (function () {
        function QueryService(q, http, url, web) {
            this.QService = q;
            this.HttpService = http;
            this.Url = url;
            this.WebService = web;
        }
        QueryService.prototype.Get = function (url) {
            var self = this;
            var deffered = self.QService.defer();
            var successCallBack = function (result) {
                var response = result.data;
                return deffered.resolve(response);
            };
            var errorCallBack = function (error) {
                return deffered.reject(error);
            };
            self.WebService.Get(url).then(successCallBack, errorCallBack);
            return deffered.promise;
        };
        QueryService.prototype.Search = function (url, request) {
            var self = this;
            var deffered = self.QService.defer();
            var successCallBack = function (result) {
                var response = new App.SearchResponse(result.data);
                return deffered.resolve(response);
            };
            var errorCallBack = function (error) {
                return deffered.reject(error);
            };
            self.WebService.Post(url, request).then(successCallBack, errorCallBack);
            return deffered.promise;
        };
        QueryService.$inject = ["$q", "$http", "UrlService", "WebService"];
        return QueryService;
    })();
    App.QueryService = QueryService;
    angular.module("app").service("QueryService", QueryService);
})(App || (App = {}));
