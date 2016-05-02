module App {

    export class StudentDetailController {

        CommandService: CommandService;
        QueryService: QueryService;
        Url: UrlService;
        Web: WebService;
        SearchRequest: SearchRequest;
        IsUpdateMode: boolean;
        Models: Student[];
        Model: Student;
        TotalDue: number;
        Dropdown: Object;
        DropdownService: DropdownService;
        private stateService: angular.ui.IStateService;
        private stateParams: angular.ui.IStateParamsService;

        static $inject: string[] = ["$location", "WebService", "UrlService", "QueryService", "CommandService", "DropdownService", "$state", "$stateParams"];

        constructor(private $location: angular.ILocationService, web: WebService, url: UrlService, search: QueryService, save: CommandService, dropdownService: DropdownService, $state: angular.ui.IStateService, $stateParams: angular.ui.IStateParamsService) {
            this.Url = url;
            this.QueryService = search;
            this.CommandService = save;
            this.stateService = $state;
            this.Web = web;
            this.stateParams = $stateParams;
            this.Dropdown = new Object();
            this.DropdownService = dropdownService;
            this.Activate();
        }

        Activate() {
            this.IsUpdateMode = false;
            this.Models = [];
            this.TotalDue = 0;
            this.SearchRequest = new SearchRequest("", "Name", "False", "");
            this.Get();
        }

        Update(): void {
            var self = this;
            var successCallBack = (response: BaseResponse): void => {
                console.log(response);
            }
            var errorCallBack = (error: any): void => {
                console.log(error);
            }

            self.CommandService.Update(self.Url.StudentEntryUrl, self.Model).then(successCallBack, errorCallBack);
        }

        Delete(id: string): void {
            var self = this;
            var successCallback = (response: BaseResponse): void => {
                self.Activate();
            };
            var errorCallback = (error: any): void => {
                console.log(error);
            };
            self.CommandService.Delete(self.Url.StudentEntryUrl, id).then(successCallback, errorCallback);
        }

        Get() {
            var self = this;

            var successCallBack = result => {
                self.Models = result.data as Student[];
                self.TotalDue = 0;
                for (var t = 0; t < self.Models.length; t++) {
                    self.TotalDue += self.Models[t].Due;
                }
                console.log("data");
            }

            var errorCallBack = error=> {
                console.log(error);
            }

            self.Web.Get(self.Url.StudentDetailUrl).then(successCallBack, errorCallBack);
        }


        Edit(t: Student): void {
            this.Model = t;
            this.IsUpdateMode = true;
        }

        Select(t: Student): void {
            console.log(t);
            this.Model = t;
            console.log(this.Model);
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
    angular.module("app").controller("StudentDetailController", StudentDetailController);

}