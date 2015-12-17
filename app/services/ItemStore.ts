/// <reference path="../../typings/tsd.d.ts" />

import { Component, Injectable} from "angular2/core";

import {Todo} from "../data/Todo";
import {FirebaseArray, AngularFire} from "../firebase/angularfire";

@Component({
    selector: 'itemStore'
})

@Injectable()
export class ItemStore{
    store:FirebaseArray;

    get items():Array<Todo> {
        return this.store.list;
    }

    constructor() {
        var data = new AngularFire(new Firebase('https://webapi.firebaseio-demo.com/test'));
        this.store = data.asArray();
    }

    removeItem(item:Todo) {
        console.log('removeItem');
        this.store.remove(item);
    }

    updateItem(item:Todo) {
        console.log("updateItem " + item.title);
        this.store.save(item);
    }

    removeAll() {
        for (var i = this.items.length - 1; i >= 0; i--) {
            this.store.remove(this.items[i]);
        }
    }

    addItem(newItem:string) {
        this.store.add(new Todo(newItem));
    }
}