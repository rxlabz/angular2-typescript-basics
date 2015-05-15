/// <reference path="typings/tsd.d.ts" />
/// <reference path="comps/MyModel.ts" />
/// <reference path="comps/itemForm.ts" />
if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
if (typeof __metadata !== "function") __metadata = function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "angular2/angular2", "comps/itemRenderer", "comps/itemForm", "comps/MyModel"], function (require, exports, angular2_1, itemRenderer_1, itemForm_1, MyModel_1) {
    var AppComponent = (function () {
        function AppComponent(m) {
            this.model = m;
            this.appName = "2Doo";
        }
        AppComponent.prototype.removeItem = function (item) {
            this.model.items.splice(this.model.items.indexOf(item), 1);
        };
        AppComponent = __decorate([
            angular2_1.Component({
                selector: 'app',
                injectables: [MyModel_1.MyModel]
            }),
            angular2_1.View({
                templateUrl: "Main.html",
                directives: [angular2_1.For, itemForm_1.itemForm, itemRenderer_1.itemRenderer]
            }), 
            __metadata('design:paramtypes', [MyModel_1.MyModel])
        ], AppComponent);
        return AppComponent;
    })();
    angular2_1.bootstrap(AppComponent);
});
