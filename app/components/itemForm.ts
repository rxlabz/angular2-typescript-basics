import {Component} from "angular2/core";
import {ItemStore} from "../services/ItemStore";
import {MdButton} from "../../components/button/button";


@Component({
    selector: 'item-form',
    templateUrl: "app/components/ItemForm.html",
    directives: [MdButton]
})
export class ItemForm{

    service:ItemStore;
    currentValue:string;

    constructor(service:ItemStore) {
        this.service = service;
        this.currentValue = "";
    }

    autosave($event) {
        if ($event.which === 13) {
            this.addName($event.target);
        }
    }

    addName(lblName:HTMLInputElement) {
        let newValue = lblName.value;

        if (newValue != '') {
            this.service.addItem(newValue);
            lblName.value = "";
        }
    }

}
