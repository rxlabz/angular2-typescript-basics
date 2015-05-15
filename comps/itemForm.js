/// <reference path="../main.ts" />
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
if (typeof __param !== "function") __param = function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
define(["require", "exports", "angular2/angular2", "angular2/di", "comps/MyModel"], function (require, exports, angular2_1, di_1, MyModel_1) {
    var itemForm = (function () {
        function itemForm(m) {
            this.model = m;
            this.currentValue = "";
        }
        itemForm.prototype.autosave = function ($event) {
            if ($event.which === 13) {
                this.addName($event.target);
            }
        };
        itemForm.prototype.addName = function (lblName) {
            this.model.items.push(lblName.value);
            lblName.value = "";
            console.log("num : " + this.model.items.length);
        };
        itemForm = __decorate([
            angular2_1.Component({
                selector: 'item-form'
            }),
            angular2_1.View({
                templateUrl: "comps/ItemForm.html"
            }),
            __param(0, di_1.Inject(MyModel_1.MyModel)), 
            __metadata('design:paramtypes', [MyModel_1.MyModel])
        ], itemForm);
        return itemForm;
    })();
    exports.itemForm = itemForm;
});
