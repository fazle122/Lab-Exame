var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var App;
(function (App) {
    var Course = (function (_super) {
        __extends(Course, _super);
        function Course() {
            _super.apply(this, arguments);
        }
        return Course;
    })(App.Entity);
    App.Course = Course;
})(App || (App = {}));
//# sourceMappingURL=Model.js.map