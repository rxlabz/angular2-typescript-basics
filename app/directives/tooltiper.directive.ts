import {DynamicComponentLoader, ComponentRef, Directive, ElementRef, Renderer, Input, ViewContainerRef} from "angular2/core";
import {Tooltip} from "../components/tooltip/Tooltip";

/**
 * tooltip attribute directive
 * » listen mouseenter / mouseleave on host
 * » instantiate and display a Tooltip Component
 */

@Directive({
        selector: '[toolTiper]',
        host: {
            '(mouseenter)': 'onMouseEnter()',
            '(mouseleave)': 'onMouseLeave()'
        }
    }
)
export class ToolTiper {

    /**
     * tooltip content input : injected from template
     */
    @Input('toolTiper') toolTipContent:string = '';

    tooltipElement:ComponentRef;

    /**
     * instantiation d'un tooltipElement cf. Tooltip.Ts
     * @param el host / target element
     * @param container
     * @param renderer
     * @param loader UI factory
     */
    constructor(private el:ElementRef, private container:ViewContainerRef,
                private renderer:Renderer, private loader:DynamicComponentLoader) {
        loader.loadNextToLocation(Tooltip, this.el)
            .then(ref => this.tooltipElement = ref);
    }

    /**
     * listen for host mouseEnter » display tooltip
     */
    onMouseEnter(e:Event) {
        console.log('mouseEnter', e);
        this.showTip();
    }

    /**
     * listen for host mouseLeave » hide tooltip
     */
    onMouseLeave() {
        this.hideTip();
    }


    showTip() {
        console.log('showTip');
        if (!this.toolTipContent)
            return;

        // host position
        const refRect = this.el.nativeElement.getBoundingClientRect();
        this.tooltipElement.instance.update(true, this.toolTipContent, refRect);
    }

    hideTip() {
        console.log('hideTip');
        this.tooltipElement.instance.isVisible = false;
    }
}
