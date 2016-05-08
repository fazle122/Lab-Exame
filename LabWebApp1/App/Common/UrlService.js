var App;
(function (App) {
    var UrlService = (function () {
        function UrlService() {
            var baseUrl = "";
            this.BaseUrl = baseUrl;
            var BaseApi = baseUrl + "/api";
            this.SignInUrl = baseUrl + "/token";
            this.RegisterUrl = BaseApi + "/Account/Register";
            this.ProfileUrl = BaseApi + "/Account/GetUserInfo";
            this.ChangePasswordUrl = BaseApi + "/Account/ChangePassword";
            this.PermissionUrl = BaseApi + "/Permission";
            this.MenuUrl = BaseApi + "/Menu";
            this.StudentEntryUrl = BaseApi + "/Student";
            this.StudentDetailUrl = BaseApi + "/StudentDetail";
            this.StudentQueryUrl = BaseApi + "/StudentQuery";
            this.CourseEntryUrl = BaseApi + "/Course";
            this.CourseQueryUrl = BaseApi + "/CourseQuery";
            this.PaymentUrl = BaseApi + "/Payment";
            this.PaymentQueryUrl = BaseApi + "/PaymentQuery";
            this.Dropdown = BaseApi + "/Dropdown";
        }
        return UrlService;
    })();
    App.UrlService = UrlService;
    angular.module("app").service("UrlService", UrlService);
})(App || (App = {}));
//# sourceMappingURL=UrlService.js.map