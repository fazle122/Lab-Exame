module App {

    export class CourseQueryController {

        CommandService: CommandService;
        QueryService: QueryService;
        Url: UrlService;
        Web: WebService;
        SearchRequest: SearchRequest;
        IsUpdateMode: boolean;
        Models: Course[];
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
            this.Get();
        }

        Get() {
            var self = this;

            var successCallBack = result => {
                self.Models = result.data as Course[];
                console.log("data");
            }

            var errorCallBack = error=> {
                console.log(error);
            }

            self.Web.Get(self.Url.CourseQueryUrl).then(successCallBack, errorCallBack);
        }

    }

    angular.module("app").controller("CourseQueryController", CourseQueryController );
}