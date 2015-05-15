/// <reference path="../main.ts" />
define(["require", "exports"], function (require, exports) {
    var MyModel = (function () {
        function MyModel() {
            console.log("MyModel constructor");
            this.items = ["a", "b", "c"];
        }
        return MyModel;
    })();
    exports.MyModel = MyModel;
});
