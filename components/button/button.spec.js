System.register(['angular2/testing', '../core/facade/testing', 'angular2/core', 'angular2/platform/browser', './button'], function (exports_1, context_1) {
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
    var testing_1, testing_2, core_1, browser_1, button_1;
    var TestApp;

    function main() {
        testing_2.describe('MdButton', function () {
            var builder;
            testing_2.beforeEach(testing_1.inject([testing_1.TestComponentBuilder], function (tcb) {
                builder = tcb;
            }));
            // General button tests
            testing_2.it('should apply class based on color attribute', function (done) {
                return builder.createAsync(TestApp).then(function (fixture) {
                    var testComponent = fixture.debugElement.componentInstance;
                    var buttonDebugElement = fixture.debugElement.query(browser_1.By.css('button'));
                    var aDebugElement = fixture.debugElement.query(browser_1.By.css('a'));
                    testComponent.buttonColor = 'primary';
                    fixture.detectChanges();
                    testing_2.expect(buttonDebugElement.nativeElement.classList.contains('md-primary')).toBe(true);
                    testing_2.expect(aDebugElement.nativeElement.classList.contains('md-primary')).toBe(true);
                    testComponent.buttonColor = 'accent';
                    fixture.detectChanges();
                    testing_2.expect(buttonDebugElement.nativeElement.classList.contains('md-accent')).toBe(true);
                    testing_2.expect(aDebugElement.nativeElement.classList.contains('md-accent')).toBe(true);
                    done();
                });
            });
            // Regular button tests
            testing_2.describe('button[md-button]', function () {
                testing_2.it('should handle a click on the button', function (done) {
                    return builder.createAsync(TestApp).then(function (fixture) {
                        var testComponent = fixture.debugElement.componentInstance;
                        var buttonDebugElement = fixture.debugElement.query(browser_1.By.css('button'));
                        buttonDebugElement.nativeElement.click();
                        testing_2.expect(testComponent.clickCount).toBe(1);
                        done();
                    });
                });
                testing_2.it('should not increment if disabled', function (done) {
                    return builder.createAsync(TestApp).then(function (fixture) {
                        var testComponent = fixture.debugElement.componentInstance;
                        var buttonDebugElement = fixture.debugElement.query(browser_1.By.css('button'));
                        testComponent.isDisabled = true;
                        fixture.detectChanges();
                        buttonDebugElement.nativeElement.click();
                        testing_2.expect(testComponent.clickCount).toBe(0);
                        done();
                    });
                });
            });
            // Anchor button tests
            testing_2.describe('a[md-button]', function () {
                testing_2.it('should not redirect if disabled', function (done) {
                    return builder.createAsync(TestApp).then(function (fixture) {
                        var testComponent = fixture.debugElement.componentInstance;
                        var buttonDebugElement = fixture.debugElement.query(browser_1.By.css('a'));
                        testComponent.isDisabled = true;
                        fixture.detectChanges();
                        buttonDebugElement.nativeElement.click();
                        // will error if page reloads
                        done();
                    });
                });
                testing_2.it('should remove tabindex if disabled', function (done) {
                    return builder.createAsync(TestApp).then(function (fixture) {
                        var testComponent = fixture.debugElement.componentInstance;
                        var buttonDebugElement = fixture.debugElement.query(browser_1.By.css('a'));
                        testing_2.expect(buttonDebugElement.nativeElement.getAttribute('tabIndex')).toBe(null);
                        testComponent.isDisabled = true;
                        fixture.detectChanges();
                        testing_2.expect(buttonDebugElement.nativeElement.getAttribute('tabIndex')).toBe('-1');
                        done();
                    });
                });
                testing_2.it('should add aria-disabled attribute if disabled', function (done) {
                    return builder.createAsync(TestApp).then(function (fixture) {
                        var testComponent = fixture.debugElement.componentInstance;
                        var buttonDebugElement = fixture.debugElement.query(browser_1.By.css('a'));
                        fixture.detectChanges();
                        testing_2.expect(buttonDebugElement.nativeElement.getAttribute('aria-disabled')).toBe('false');
                        testComponent.isDisabled = true;
                        fixture.detectChanges();
                        testing_2.expect(buttonDebugElement.nativeElement.getAttribute('aria-disabled')).toBe('true');
                        done();
                    });
                });
            });
        });
    }

    exports_1("main", main);
    return {
        setters: [
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (testing_2_1) {
                testing_2 = testing_2_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (button_1_1) {
                button_1 = button_1_1;
            }],
        execute: function () {
            /** Test component that contains an MdButton. */
            TestApp = (function () {
                function TestApp() {
                    this.clickCount = 0;
                    this.isDisabled = false;
                }

                TestApp.prototype.increment = function () {
                    this.clickCount++;
                };
                TestApp = __decorate([
                    core_1.Component({
                        selector: 'test-app',
                        template: "\n    <button md-button type=\"button\" (click)=\"increment()\"\n      [disabled]=\"isDisabled\" [color]=\"buttonColor\">\n      Go\n    </button>\n    <a href=\"http://www.google.com\" md-button [disabled]=\"isDisabled\" [color]=\"buttonColor\">Link</a>\n  ",
                        directives: [button_1.MdButton, button_1.MdAnchor]
                    }),
                    __metadata('design:paramtypes', [])
                ], TestApp);
                return TestApp;
            }());
        }
    }
});
//# sourceMappingURL=button.spec.js.map