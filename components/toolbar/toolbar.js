System.register(['angular2/core'], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
            var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
            if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
            else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
    var __metadata = (this && this.__metadata) || function (k, v) {
            if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
        };
    var core_1, core_2, core_3;
    var MdToolbar;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
                core_3 = core_1_1;
            }],
        execute: function () {
            MdToolbar = (function () {
                function MdToolbar(elementRef, renderer) {
                    this.elementRef = elementRef;
                    this.renderer = renderer;
                }

                Object.defineProperty(MdToolbar.prototype, "color", {
                    get: function () {
                        return this._color;
                    },
                    set: function (value) {
                        this._updateColor(value);
                    },
                    enumerable: true,
                    configurable: true
                });
                MdToolbar.prototype._updateColor = function (newColor) {
                    if (this._color != null && this._color != '') {
                        this.renderer.setElementClass(this.elementRef.nativeElement, "md-" + newColor, false);
                    }
                    if (newColor != null && newColor != '') {
                        this.renderer.setElementClass(this.elementRef.nativeElement, "md-" + newColor, true);
                    }
                    this._color = newColor;
                };
                __decorate([
                    core_1.Input(),
                    __metadata('design:type', String)
                ], MdToolbar.prototype, "color", null);
                MdToolbar = __decorate([
                    core_1.Component({
                        selector: 'md-toolbar',
                        templateUrl: './components/toolbar/toolbar.html',
                        styleUrls: ['./components/toolbar/toolbar.css'],
                        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                    }),
                    __metadata('design:paramtypes', [core_3.ElementRef, core_2.Renderer])
                ], MdToolbar);
                return MdToolbar;
            }());
            exports_1("MdToolbar", MdToolbar);
        }
    }
});
//# sourceMappingURL=toolbar.js.map