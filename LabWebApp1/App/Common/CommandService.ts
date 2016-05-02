module App {

    export class CommandService {
        QService: angular.IQService;
        UrlService: UrlService;
        WebService: WebService;

        static $inject = ["$q","UrlService", "WebService"];
        constructor(q: angular.IQService, url: UrlService, web: WebService) {
            this.QService = q;
            this.UrlService = url;
            this.WebService = web;
            console.log("this is from Commandservice");
        }


        Save(url: string, data: Entity): angular.IPromise<BaseResponse> {
            var self = this;
            var deffered = self.QService.defer();

            var successCallBack = (result: any):any => {
                var response = new BaseResponse(true, result.data, "success");
                return deffered.resolve(response);
            }

            var errorCallBack = error => {
                return deffered.reject(error);
            }

            self.WebService.Post(url, data).then(successCallBack, errorCallBack);
            return deffered.promise;
        }

        Update(url: string,data:Entity): angular.IPromise<BaseResponse> {
            var self = this;
            var deffered = self.QService.defer();

            var successCallBack = (result: any): any => {
                var response = new BaseResponse(true, result.data, "success");
                return deffered.resolve(response);
            }

            var errorCallBack = error => {
                return deffered.reject(error);
            }

            self.WebService.Update(url, data).then(successCallBack, errorCallBack);
            return deffered.promise;

        }

        Delete(url: string, id: string): angular.IPromise<BaseResponse> {
            var self = this;
            var deffered = self.QService.defer();

            var successCallBack = (result: any): any => {
                var response = new BaseResponse(true, result.data, "success");
                return deffered.resolve(response);
            }

            var errorCallBack = error => {
                return deffered.reject(error);
            }

            self.WebService.Delete(url + "?id=" + id).then(successCallBack, errorCallBack);
            return deffered.promise;

        }


    }

    angular.module("app").service("CommandService", CommandService );

}