export declare class MdButton {
    color:string;
    /** Whether the button has focus from the keyboard (not the mouse). Used for class binding. */
    isKeyboardFocused:boolean;
    /** Whether a mousedown has occurred on this element in the last 100ms. */
    isMouseDown:boolean;

    setClassList():string;

    setMousedown():void;

    setKeyboardFocus($event:any):void;

    removeKeyboardFocus():void;
}
export declare class MdAnchor extends MdButton {
    _disabled:boolean;
    tabIndex:number;
    isAriaDisabled:string;
    disabled:boolean;

    haltDisabledEvents(event:Event):void;
}
