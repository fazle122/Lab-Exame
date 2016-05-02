module App {
    export class ProfileController {
        QueryService: QueryService;
        CommandService: CommandService;
        Url: UrlService;
        User: UserInfoViewModel;
        ChangePasswordModel: ChangePasswordModel;

        static $inject: string[] = ["$location", "UrlService", "QueryService", "CommandService"];

        constructor(private $location: angular.ILocationService, url: UrlService, search: QueryService, save: CommandService) {
            this.Url = url;
            this.QueryService = search;
            this.CommandService = save;
            this.Activate();
        }

        Activate() {
            this.User = new UserInfoViewModel();
            this.ChangePasswordModel = new ChangePasswordModel();
            this.GetUserInfo();
        }

        GetUserInfo(): void {
            var self = this;
            var successCallback = (response: SearchResponse): void => {
                console.log(response);
                self.User = <any>response;
            };
            var errorCallback = (error: any): void => {
                console.log(error);
            };
            self.QueryService.Get(self.Url.ProfileUrl).then(<any>successCallback, errorCallback);
        }


        Update(): void {
            var self = this;
            var successCallback = (response: BaseResponse): void => {
                console.log(response);
            };
            var errorCallback = (error: any): void => {
                console.log(error);
            };

            self.CommandService.Save(self.Url.ChangePasswordUrl, self.ChangePasswordModel).then(<any>successCallback, errorCallback);
        }


    }
    angular.module("app").controller("ProfileController", ProfileController);
}
