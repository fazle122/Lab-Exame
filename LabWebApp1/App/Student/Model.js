var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var App;
(function (App) {
    var Student = (function (_super) {
        __extends(Student, _super);
        function Student() {
            _super.apply(this, arguments);
        }
        return Student;
    })(App.Entity);
    App.Student = Student;
})(App || (App = {}));
