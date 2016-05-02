module App {

    export class PaymentController {

        CommandService: CommandService;
        QueryService: QueryService;
        Url: UrlService;
        WebService: WebService;
        SearchRequest: SearchRequest;
        IsUpdateMode: boolean;
        Models: Payment[];
        Model: Payment;
        DropdownService: DropdownService;
        Dropdown: Object;
        private authService: AuthService;
        User: AccountInfo;
        private stateService: angular.ui.IStateService;
        private stateParams: angular.ui.IStateParamsService;

        static $inject: string[] = ["$location", "UrlService","WebService", "QueryService", "CommandService", "AuthService", "DropdownService", "$state", "$stateParams"];

        constructor(private $location: angular.ILocationService, url: UrlService, web: WebService, search: QueryService, save: CommandService, authService: AuthService, dropdown: DropdownService, $state: angular.ui.IStateService, $stateParams: angular.ui.IStateParamsService) {
            this.Url = url;
            this.WebService = web;
            this.QueryService = search;
            this.CommandService = save;
            this.authService = authService;
            this.DropdownService = dropdown;
            this.IsUpdateMode = false;
            this.Activate();

            var acc = this.authService.AccountInfo;
            if (acc && acc.IsAuth) {
                this.loadUser();
            }

        }

        Activate() {
            console.log('i m in PaymentController');
            this.IsUpdateMode = false;
            this.Models = [];
            this.Model = new Payment();
            this.Dropdown = new Object();
            this.LoadDropdown("student");
            this.Get();

        }

        private loadUser(): void {
            var self = this;
            self.User = this.authService.AccountInfo;
        }

        Save(): void {
            var self = this;
            var successCallback = (response: BaseResponse): void => {
                console.log(response);
                self.Model = new Payment();

            };
            var errorCallback = (error: any): void => {
                console.log(error);
            };

            self.CommandService.Save(self.Url.PaymentUrl,self.Model).then(<any>successCallback, errorCallback);
        }

        Delete(id: string): void {
            var self = this;
            var successCallback = (response: BaseResponse): void => {
                self.Activate();
            };
            var errorCallback = (error: any): void => {
                console.log(error);
            };
            self.CommandService.Delete(self.Url.PaymentUrl, id).then(successCallback, errorCallback);
        }

        Get() {
            var self = this;

            var successCallBack = result => {
                self.Models = result.data as Payment[];
                console.log("data");
            }

            var errorCallBack = error=> {
                console.log(error);
            }

            self.WebService.Get(self.Url.PaymentQueryUrl).then(successCallBack, errorCallBack);
        }


        Edit(p: Payment): void {
            this.Model = p;
            this.IsUpdateMode = true;
        }

        Select(p: Payment): void {
            console.log(p);
            this.Model = p;
            this.Model.Id = p.Id;

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

    angular.module("app").controller("PaymentController", PaymentController );
}