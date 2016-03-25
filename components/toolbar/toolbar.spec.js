System.register(['angular2/core', 'angular2/testing', '../core/facade/testing', 'angular2/platform/browser', './toolbar'], function (exports_1, context_1) {
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
    var core_1, testing_1, testing_2, browser_1, toolbar_1;
    var TestApp;

    function main() {
        testing_2.describe('MdToolbar', function () {
            var builder;
            testing_2.beforeEach(testing_1.inject([testing_1.TestComponentBuilder], function (tcb) {
                builder = tcb;
            }));
            testing_2.it('should apply class based on color attribute', function (done) {
                return builder.createAsync(TestApp).then(function (fixture) {
                    var testComponent = fixture.debugElement.componentInstance;
                    var toolbarDebugElement = fixture.debugElement.query(browser_1.By.css('md-toolbar'));
                    testComponent.toolbarColor = 'primary';
                    fixture.detectChanges();
                    testing_2.expect(toolbarDebugElement.nativeElement.classList.contains('md-primary')).toBe(true);
                    testComponent.toolbarColor = 'accent';
                    fixture.detectChanges();
                    testing_2.expect(toolbarDebugElement.nativeElement.classList.contains('md-accent')).toBe(true);
                    testComponent.toolbarColor = 'warn';
                    fixture.detectChanges();
                    testing_2.expect(toolbarDebugElement.nativeElement.classList.contains('md-warn')).toBe(true);
                    done();
                });
            });
        });
    }

    exports_1("main", main);
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (testing_2_1) {
                testing_2 = testing_2_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (toolbar_1_1) {
                toolbar_1 = toolbar_1_1;
            }],
        execute: function () {
            TestApp = (function () {
                function TestApp() {
                }

                TestApp = __decorate([
                    core_1.Component({
                        selector: 'test-app',
                        template: "\n    <md-toolbar [color]=\"toolbarColor\">\n      <span>Test Toolbar</span>\n    </md-toolbar>\n  ",
                        directives: [toolbar_1.MdToolbar]
                    }),
                    __metadata('design:paramtypes', [])
                ], TestApp);
                return TestApp;
            }());
        }
    }
});
//# sourceMappingURL=toolbar.spec.js.map