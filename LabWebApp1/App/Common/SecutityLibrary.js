var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var App;
(function (App) {
    var SigninRequest = (function () {
        function SigninRequest(email, password) {
            this.Email = email;
            this.Password = password;
        }
        return SigninRequest;
    })();
    App.SigninRequest = SigninRequest;
    var AccountInfo = (function () {
        function AccountInfo() {
        }
        return AccountInfo;
    })();
    App.AccountInfo = AccountInfo;
    var RegisterRequest = (function () {
        function RegisterRequest(email, password, confirmPassword, firstName, lastName, phone) {
            this.Email = email;
            this.Password = password;
            this.ConfirmPassword = confirmPassword;
            this.FirstName = firstName;
            this.LastName = lastName;
            this.Phone = phone;
        }
        return RegisterRequest;
    })();
    App.RegisterRequest = RegisterRequest;
    var RegisterResponse = (function (_super) {
        __extends(RegisterResponse, _super);
        function RegisterResponse() {
            _super.apply(this, arguments);
        }
        return RegisterResponse;
    })(App.BaseResponse);
    App.RegisterResponse = RegisterResponse;
})(App || (App = {}));
