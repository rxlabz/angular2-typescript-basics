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
define(["require", "exports", "angular2/angular2"], function (require, exports, angular2_1) {
    var itemRenderer = (function () {
        function itemRenderer() {
            this.deleteItem = new angular2_1.EventEmitter();
        }
        itemRenderer.prototype.removeItem = function (item) {
            this.deleteItem.next();
            console.log('remove ' + item);
        };
        itemRenderer = __decorate([
            angular2_1.Component({
                selector: 'item-renderer',
                properties: { item: "item" },
                events: ['deleteItem']
            }),
            angular2_1.View({
                templateUrl: "comps/itemRenderer.html"
            }), 
            __metadata('design:paramtypes', [])
        ], itemRenderer);
        return itemRenderer;
    })();
    exports.itemRenderer = itemRenderer;
});
