/// <reference path="../../typings/tsd.d.ts" />

import { Component, EventEmitter, OnDestroy} from "angular2/core";

import {Todo} from "../data/Todo"
import {FormBuilder, Validators, FORM_BINDINGS} from "angular2/common";
import {ControlGroup} from "angular2/common";
import {ToolTiper} from "../directives/tooltiper.directive";
import {StructuralTip} from "../../../../../../notes/NG2Notes/protos/structural-tooltip.directive.ts";

@Component({
    selector: 'item-renderer',
    properties: ["item: item"],
    outputs: ['deleteItem', 'updateItem'],
    directives: [ToolTiper],
    templateUrl: "app/components/ItemRenderer.html"
})
export class ItemRenderer implements OnDestroy {

    hasError:boolean;

    private _item:Todo;
    private todoForm:ControlGroup;

    deleteItem:EventEmitter<any> = new EventEmitter();
    updateItem:EventEmitter<any> = new EventEmitter();

    editable:boolean;
    lastValue:string;

    get item():Todo {
        return this._item;
    }

    set item(value:Todo) {
        this._item = value;

        if (value)
            this.initRenderer();
    }

    constructor() {
        this.editable = false;
    }

    private initRenderer() {
        if (!this.todoForm) {
            let fb = new FormBuilder();
            this.todoForm = fb.group({
                title: [this._item.title, Validators.required]
            });
        } else {
            this.todoForm.value.title = this._item.title;
        }
    };


    removeItem(item:string) {
        this.deleteItem.emit(item);
        console.log('remove ' + item);
    }

    edit() {
        this.editable = true;
        this.lastValue = this.item.title;
    }

    onKey($event) {
        if ($event && $event.which !== 13) return;
        this.save()
    }

    save($event = null) {
        if ($event)
            $event.preventDefault();

        if (this.todoForm.valid) {
            this.hasError = false;
            this.item.title = this.todoForm.value.title;
        } else {
            this.hasError = true;
            return;
        }

        this.updateItem.emit(this.item);
        this.editable = false;
    }

    autosave($event) {
        this.item.title = $event.target.value;
    }

    cancel() {
        this.item.title = this.lastValue;
        this.lastValue = "";
        this.editable = false;
    }

    onItemFocus() {
        console.log("FOCUS");
    }

    ngOnDestroy() {
        console.log('ngOnDestroy', this._item);
    }
}