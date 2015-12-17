import {Component} from 'angular2/core';
import {Todo} from "./data/Todo";
import {ItemStore} from "./services/ItemStore";
import {ItemForm} from "./components/itemForm";
import {ItemRenderer} from "./components/itemRenderer";

@Component({
    selector: 'app',
    templateUrl: 'app/App.html',
    directives: [ItemForm, ItemRenderer],
    providers: [ItemStore]
})
export class App {
    service:ItemStore
    appName:string;

    get items():Array<Todo> {
        return this.service.items;
    }

    constructor(service:ItemStore) {

        console.log('App construct');

        this.appName = "2Doo";
        this.service = service;
    }

    removeItem(item:Todo) {
        this.service.removeItem(item);
    }

    updateItem(item:Todo) {
        this.service.updateItem(item);
    }

    removeAll() {
        this.service.removeAll();
    }

}
