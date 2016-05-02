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



    }

    angular.module("app").controller("StudentController", StudentController);
}