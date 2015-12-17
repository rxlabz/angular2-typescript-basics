System.register([], function(exports_1) {
    var Todo;
    return {
        setters:[],
        execute: function() {
            Todo = (function () {
                function Todo(t, c) {
                    if (c === void 0) { c = false; }
                    this.title = t;
                    this.completed = c;
                }
                return Todo;
            })();
            exports_1("Todo", Todo);
        }
    }
});
//# sourceMappingURL=Todo.js.map