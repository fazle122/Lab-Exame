module App {

    export class StudentController {

        Model: Student;
        CommandService: CommandService;
        Url: UrlService;
        Web: WebService;
        DropdownService: DropdownService;
        Dropdown: Object;

        static $inject = ["CommandService", "UrlService", "WebService","DropdownService"];
        constructor(service: CommandService, url: UrlService, web: WebService, dropdown: DropdownService) {

            this.CommandService = service;
            this.Url = url;
            this.Web = web;
            this.DropdownService = dropdown;
            this.Dropdown = new Object();
            this.LoadDropdown("course");
        }

        Save(): void {
            var self = this;

            var successCallBack = (response: BaseResponse): void => {
                console.log(response);
            }

            var errorCallBack = error => {
                console.log(error);
            }

            self.Web.Post(self.Url.StudentEntryUrl, self.Model).then(successCallBack, errorCallBack);
        }

        LoadDropdown(name: string): void {
            var self = this;
            var successCallback = (response: SearchResponse): void => {
                console.log(response);
                self.Dropdown[name] = response.Models;
                console.log(self.Dropdown);
            };
            var errorCallback = (error: any): void => {
                console.log(error);
            };

            self.DropdownService.Load(name).then(<any>successCallback, errorCallback);
        }



    }

    angular.module("app").controller("StudentController", StudentController);
}