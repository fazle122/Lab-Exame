module App {

    export class QueryService {

        QService: angular.IQService;
        HttpService: angular.IHttpService;
        Url: UrlService;
        WebService: WebService;

        static $inject = ["$q", "$http", "UrlService", "WebService"];
        constructor(q: angular.IQService, http: angular.IHttpService, url: UrlService, web: WebService) {
            this.QService = q;
            this.HttpService = http;
            this.Url = url;
            this.WebService = web;

        }

        Get(url: string): angular.IPromise<any> {
            var self = this;
            var deffered = self.QService.defer();

            var successCallBack = (result: any): any => {
                var response = result.data;
                return deffered.resolve(response);
            }

            var errorCallBack = error => {
                return deffered.reject(error);

            }

            self.WebService.Get(url).then(successCallBack, errorCallBack);
            return deffered.promise;

        }

        Search(url: string, request: SearchResponse): angular.IPromise<SearchResponse> {

            var self = this;
            var deffered = self.QService.defer();

            var successCallBack = result => {
                var response = new SearchResponse(result.data);
                return deffered.resolve(response);
            }

            var errorCallBack = error => {
                return deffered.reject(error);
            }

            self.WebService.Post(url, request).then(successCallBack, errorCallBack);
            return deffered.promise;
        }


    }

    angular.module("app").service("QueryService", QueryService );

}