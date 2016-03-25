System.register(['angular2/core', 'angular2/src/facade/async'], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
            function __() {
                this.constructor = d;
            }

            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
            var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
            if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
            else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
    var __metadata = (this && this.__metadata) || function (k, v) {
            if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
        };
    var core_1, async_1;
    var MdButton, MdAnchor;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (async_1_1) {
                async_1 = async_1_1;
            }],
        execute: function () {
            // TODO(jelbourn): Ink ripples.
            // TODO(jelbourn): Make the `isMouseDown` stuff done with one global listener.
            // TODO(kara): Convert attribute selectors to classes when attr maps become available
            MdButton = (function () {
                function MdButton() {
                    /** Whether the button has focus from the keyboard (not the mouse). Used for class binding. */
                    this.isKeyboardFocused = false;
                    /** Whether a mousedown has occurred on this element in the last 100ms. */
                    this.isMouseDown = false;
                }

                MdButton.prototype.setClassList = function () {
                    return "md-" + this.color;
                };
                MdButton.prototype.setMousedown = function () {
                    var _this = this;
                    // We only *show* the focus style when focus has come to the button via the keyboard.
                    // The Material Design spec is silent on this topic, and without doing this, the
                    // button continues to look :active after clicking.
                    // @see http://marcysutton.com/button-focus-hell/
                    this.isMouseDown = true;
                    async_1.TimerWrapper.setTimeout(function () {
                        _this.isMouseDown = false;
                    }, 100);
                };
                MdButton.prototype.setKeyboardFocus = function ($event) {
                    this.isKeyboardFocused = !this.isMouseDown;
                };
                MdButton.prototype.removeKeyboardFocus = function () {
                    this.isKeyboardFocused = false;
                };
                MdButton = __decorate([
                    core_1.Component({
                        selector: '[md-button]:not(a), [md-raised-button]:not(a), [md-fab]:not(a), [md-mini-fab]:not(a)',
                        inputs: ['color'],
                        host: {
                            '[class.md-button-focus]': 'isKeyboardFocused',
                            '[class]': 'setClassList()',
                            '(mousedown)': 'setMousedown()',
                            '(focus)': 'setKeyboardFocus()',
                            '(blur)': 'removeKeyboardFocus()'
                        },
                        templateUrl: './components/button/button.html',
                        styleUrls: ['./components/button/button.css'],
                        encapsulation: core_1.ViewEncapsulation.None,
                        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                    }),
                    __metadata('design:paramtypes', [])
                ], MdButton);
                return MdButton;
            }());
            exports_1("MdButton", MdButton);
            MdAnchor = (function (_super) {
                __extends(MdAnchor, _super);
                function MdAnchor() {
                    _super.apply(this, arguments);
                    this._disabled = null;
                }

                Object.defineProperty(MdAnchor.prototype, "tabIndex", {
                    get: function () {
                        return this.disabled ? -1 : 0;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MdAnchor.prototype, "isAriaDisabled", {
                    get: function () {
                        return this.disabled ? 'true' : 'false';
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(MdAnchor.prototype, "disabled", {
                    get: function () {
                        return this._disabled;
                    },
                    set: function (value) {
                        // The presence of *any* disabled value makes the component disabled, *except* for false.
                        this._disabled = (value != null && value != false) ? true : null;
                    },
                    enumerable: true,
                    configurable: true
                });
                MdAnchor.prototype.haltDisabledEvents = function (event) {
                    // A disabled button shouldn't apply any actions
                    if (this.disabled) {
                        event.preventDefault();
                        event.stopImmediatePropagation();
                    }
                };
                __decorate([
                    core_1.HostBinding('tabIndex'),
                    __metadata('design:type', Number)
                ], MdAnchor.prototype, "tabIndex", null);
                __decorate([
                    core_1.HostBinding('attr.aria-disabled'),
                    __metadata('design:type', String)
                ], MdAnchor.prototype, "isAriaDisabled", null);
                __decorate([
                    core_1.HostBinding('attr.disabled'),
                    core_1.Input('disabled'),
                    __metadata('design:type', Object)
                ], MdAnchor.prototype, "disabled", null);
                __decorate([
                    core_1.HostListener('click', ['$event']),
                    __metadata('design:type', Function),
                    __metadata('design:paramtypes', [Event]),
                    __metadata('design:returntype', void 0)
                ], MdAnchor.prototype, "haltDisabledEvents", null);
                MdAnchor = __decorate([
                    core_1.Component({
                        selector: 'a[md-button], a[md-raised-button], a[md-fab], a[md-mini-fab]',
                        inputs: ['color'],
                        host: {
                            '[class.md-button-focus]': 'isKeyboardFocused',
                            '[class]': 'setClassList()',
                            '(mousedown)': 'setMousedown()',
                            '(focus)': 'setKeyboardFocus()',
                            '(blur)': 'removeKeyboardFocus()'
                        },
                        templateUrl: './components/button/button.html',
                        styleUrls: ['./components/button/button.css'],
                        encapsulation: core_1.ViewEncapsulation.None
                    }),
                    __metadata('design:paramtypes', [])
                ], MdAnchor);
                return MdAnchor;
            }(MdButton));
            exports_1("MdAnchor", MdAnchor);
        }
    }
});
//# sourceMappingURL=button.js.map