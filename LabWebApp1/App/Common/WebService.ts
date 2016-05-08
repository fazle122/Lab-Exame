module App {

    export class WebService {
        HttpService: angular.IHttpService;
        QService: angular.IQService;

        static $inject = ["$http", "$q"];
        constructor(httpService: angular.IHttpService, qService: angular.IQService) {

            this.HttpService = httpService;
            this.QService = qService;

        }

        Post(url: string, data: any): angular.IPromise<any>  {

            var self = this;
            var deffered = self.QService.defer();
            console.log("its from webservice");

            var successCallBack = result => {
                if (result.status === 200) {
                    deffered.resolve(result);
                } else {
                    deffered.reject(result);
                }
            }

            var errorCallBack = error => {
                deffered.reject(error);
            }

            self.HttpService.post(url, data).then(successCallBack, errorCallBack);
            return deffered.promise;
        }


        PostUrlEncodeFrom(url: string, data:any): angular.IPromise<any> {

            var self = this;
            var deffered = self.QService.defer();

            var successCallBack = result => {
                if (result.status === 200) {
                    deffered.resolve(result);
                } else {
                    deffered.reject(result);
                }
            }

            var errorCallBack = error => {
                deffered.reject(error);
            }

            var config: angular.IRequestShortcutConfig = { headers: { 'Content-Type': "application/x-www-form-urlencoded" } };

            self.HttpService.post(url, data, config).then(successCallBack, errorCallBack);
            return deffered.promise;
        }


        Update(url: string, data: any): angular.IPromise<any> {

            var self = this;
            var deffered = self.QService.defer();

            var successCallBack = (result: any): any => {
                if (result.status === 200) {
                    return deffered.resolve(result);
                } else {
                    return deffered.reject(result);
                }
            }

            var errorCallBack = error => {
                return deffered.reject(error);
            }

            self.HttpService.put(url, data).then(successCallBack, errorCallBack);
            return deffered.promise;
        }


        Delete(url: string): angular.IPromise<any> {

            var self = this;
            var deffered = self.QService.defer();

            var successCallBack = (result: any): any => {
                if (result.status === 200) {
                    return deffered.resolve(result);
                } else {
                    return deffered.reject(result);
                }
            }

            var errorCallBack = error => {
                return deffered.reject(error);
            }

            self.HttpService.delete(url).then(successCallBack, errorCallBack);
            return deffered.promise;
        }


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

        Get(url: string): angular.IPromise<any> {
            var self = this;
            var deffered = self.QService.defer();
            self.HttpService.get(url).then((result: any): any => {
                if (result.status === 200) {
                    deffered.resolve(result);
                } else {
                    deffered.reject(result);
                }
            }, error => {
                deffered.reject(error);
            });
            return deffered.promise;
        }

    }

    angular.module("app").service("WebService", WebService);

}