module App {

    export class CourseController {

        Model: Course;
        CommandService: CommandService;
        Url: UrlService;
        Web: WebService;

        static $inject = ["CommandService", "UrlService", "WebService"];
        constructor(service: CommandService, url: UrlService, web: WebService) {

            this.CommandService = service;
            this.Url = url;
            this.Web = web;
        }

        Save(): void {
            var self = this;

            var successCallBack = (response: BaseResponse): void => {
                console.log(response);
            }

            var errorCallBack = error => {
                console.log(error);
            }

            self.Web.Post(self.Url.CourseEntryUrl, self.Model).then(successCallBack, errorCallBack);

        }

    }

    angular.module("app").controller("CourseController", CourseController);
}