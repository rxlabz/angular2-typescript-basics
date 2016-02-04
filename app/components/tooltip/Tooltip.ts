import {Component} from "angular2/core";

/**
 * Tooltip visual component
 */
@Component({
    selector: 'tooltip',
    templateUrl: 'app/components/tooltip/Tooltip.html',
    styleUrls: ['app/components/tooltip/Tooltip.css']
})
export class Tooltip {
    visible:boolean = false;
    content:string;
    pos:ClientRect;
    test:string = 'red';

    get posLeft():number {
        return this.pos ? this.pos.left + window.scrollX + 30 : 0;
    }

    get posTop():number {
        return this.pos ? this.pos.top + window.scrollY - 40 : 0;
    }

    /**
     * update tip state
     * @param visible
     * @param content
     * @param pos
     */
    update(visible:boolean, content:string, pos:ClientRect) {
        this.visible = visible;
        this.content = content;
        this.pos = pos;
    }

    hide() {
        this.visible = false;
    }


}