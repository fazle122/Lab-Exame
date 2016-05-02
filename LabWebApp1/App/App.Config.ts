module App {

    export class AppConfig {

        static $inject = ["$stateProvider", "$urlRouterProvider"];
        constructor($stateProvice: angular.ui.IStateProvider, $url: angular.ui.IUrlRouterProvider) {
            $url.otherwise("/");
            console.log("its from config");
            $stateProvice
                .state("root", {
                    abstract: true,
                    url: "",
                    template: "<div ui-view></div>",
                })
                .state("root.home", {
                    url: "/",
                    templateUrl: "partials/home.html",
                    controller: "HomeController",
                    controllerAs: "vm",
                })
                .state("root.signin", {
                    url: "/signin",
                    templateUrl: "partials/account/signin.html",
                    controller: "SignInController",
                    controllerAs: "vm",
                })
                .state("root.register", {
                    url: "/register",
                    templateUrl: "partials/account/register.html",
                    controller: "RegisterController",
                    controllerAs: "vm",
                })
                .state("root.profile", {
                    url: "/profile",
                    templateUrl: "partials/account/profile.html",
                    controller: "ProfileController",
                    controllerAs: "vm"
                })
                .state("root.denied", {
                    url: "/denied",
                    template: '<h1>Access Denied <a ui-sref="root.home"> back to home </a></h1>'
                })
                .state("root.studententry", {
                    url: "/studententry",
                    templateUrl: "partials/student/student-entry.html",
                    controller: "StudentController",
                    controllerAs: "vm",

                })
                .state("root.studentdetail", {
                    url: "/studentdetail",
                    templateUrl: "partials/student/student-detail.html",
                    controller: "StudentDetailController",
                    controllerAs: "vm"
                })
                .state("root.courseentry", {
                    url: "/courseentry",
                    templateUrl: "partials/course/course-entry.html",
                    controller: "CourseController",
                    controllerAs: "vm"
                })
                .state("root.courselist", {
                    url: "/courselist",
                    templateUrl: "partials/course/course-list.html",
                    controller: "CourseQueryController",
                    controllerAs: "vm"
                })
                .state("root.payment", {
                    url: "/payment",
                    templateUrl: "partials/payment/payment.html",
                    controller: "PaymentController",
                    controllerAs: "vm"
                });
            $url.otherwise("/");
                
        }

    }

    angular.module("app", ["ui.router", "ngResource", "LocalStorageModule"]);
    angular.module("app").config(AppConfig);

}