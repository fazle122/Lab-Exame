var App;
(function (App) {
    var WebService = (function () {
        function WebService(httpService, qService) {
            this.HttpService = httpService;
            this.QService = qService;
        }
        WebService.prototype.Post = function (url, data) {
            var self = this;
            var deffered = self.QService.defer();
            console.log("its from webservice");
            var successCallBack = function (result) {
                if (result.status === 200) {
                    deffered.resolve(result);
                }
                else {
                    deffered.reject(result);
                }
            };
            var errorCallBack = function (error) {
                deffered.reject(error);
            };
            self.HttpService.post(url, data).then(successCallBack, errorCallBack);
            return deffered.promise;
        };
        WebService.prototype.PostUrlEncodeFrom = function (url, data) {
            var self = this;
            var deffered = self.QService.defer();
            var successCallBack = function (result) {
                if (result.status === 200) {
                    deffered.resolve(result);
                }
                else {
                    deffered.reject(result);
                }
            };
            var errorCallBack = function (error) {
                deffered.reject(error);
            };
            var config = { headers: { 'Content-Type': "application/x-www-form-urlencoded" } };
            self.HttpService.post(url, data, config).then(successCallBack, errorCallBack);
            return deffered.promise;
        };
        WebService.prototype.Update = function (url, data) {
            var self = this;
            var deffered = self.QService.defer();
            var successCallBack = function (result) {
                if (result.status === 200) {
                    return deffered.resolve(result);
                }
                else {
                    return deffered.reject(result);
                }
            };
            var errorCallBack = function (error) {
                return deffered.reject(error);
            };
            self.HttpService.put(url, data).then(successCallBack, errorCallBack);
            return deffered.promise;
        };
        WebService.prototype.Delete = function (url) {
            var self = this;
            var deffered = self.QService.defer();
            var successCallBack = function (result) {
                if (result.status === 200) {
                    return deffered.resolve(result);
                }
                else {
                    return deffered.reject(result);
                }
            };
            var errorCallBack = function (error) {
                return deffered.reject(error);
            };
            self.HttpService.delete(url).then(successCallBack, errorCallBack);
            return deffered.promise;
        };
        //Get(url: string): angular.IPromise<any> {
        //    var self = this;
        //    var deffered = self.QService.defer();
        //    var successCallBack = (result: any): any => {
        //        if (result.status === 200) {
        //            return deffered.resolve(result);
        //        } else {
        //            return deffered.reject(result);
        //        }
        //    }
        //    var errorCallBack = error => {
        //        return deffered.reject(error);
        //    }
        //    self.HttpService.get(url).then(successCallBack, errorCallBack);
        //    return deffered.promise;
        //}
        WebService.prototype.Get = function (url) {
            var self = this;
            var deffered = self.QService.defer();
            self.HttpService.get(url).then(function (result) {
                if (result.status === 200) {
                    deffered.resolve(result);
                }
                else {
                    deffered.reject(result);
                }
            }, function (error) {
                deffered.reject(error);
            });
            return deffered.promise;
        };
        WebService.$inject = ["$http", "$q"];
        return WebService;
    })();
    App.WebService = WebService;
    angular.module("app").service("WebService", WebService);
})(App || (App = {}));
//# sourceMappingURL=WebService.js.map