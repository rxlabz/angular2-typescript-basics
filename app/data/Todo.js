System.register([], function(exports_1) {
    var Todo;
    return {
        setters:[],
        execute: function() {
            Todo = (function () {
                function Todo(t, d) {
                    this.title = t;
                    this.creationDate = d.toDateString();
                    console.log('date', this.creationDate);
                }
                return Todo;
            })();
            exports_1("Todo", Todo);
        }
    }
});
//# sourceMappingURL=Todo.js.map