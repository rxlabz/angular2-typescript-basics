# angular2-typescript-basics
Angular2(beta9) / Typescript(1.8) with Firebase :
- Components with properties, events, directives, providers, templateURL and child components
- DI with providers
- custom (event) with EventEmitter
- stores data with Firebase
- uses NgFor & NgIf directives
- FormBuilder
- Tooltip Attribute directive
- material2 design alpha.0 integration ( md-button, md-toolbar)

![screen](https://www.evernote.com/l/AAEJ_AvZwDBEBKOuSvmY6whwU28e5OnyxF4B/image.png)

## Setup
check [setup details](https://angular.io/docs/js/latest/quickstart.html)

```bash
npm install
```

## Run

cf. package.json "scripts"
```bash
npm run go
```

## Angular 2
### Basic Component
```typescrip
import {Component} from "angular2/core"

@Component({
  selector:'nice-component'
  templateUrl:"relativePath/to/NiceComponent.html"
})
class NiceComponent{
	property:type;
	constructor(){...}
	aMethod(){...}
}
```

### Dependency Injection
```typescript
@Component({
  selector:'nice-component',
  providers:[AClassToInject]
})

// ...

class NiceComponent{
  ...
  constructor(injectedInstance:AClassToInject){
    ...
  }
  ...
}

// ...

@Injectable
export class AClassToInject{
// ...
}

bootstrap( App, [AClassToInject] );
```

### EventEmitter
```typescript
import { Component, EventEmitter } from "angular2/core";

@Component({
	/* ... */
	events:['deleteItem']
})
...
export class itemRenderer{
	...
	deleteItem:EventEmitter;
	
	constructor(){
		this.deleteItem = new EventEmitter();
	}
	
	removeItem( item:string ){
		this.deleteItem.emit(item);
	}
}
```
Listen to an event with the new (event) syntax

```html
<item-renderer (deleteItem)="removeItem(item)" />
```

### Component properties
```typescript
// itemRenderer.ts
import { Component, EventEmitter } from "angular2/core";

@Component({
	...,
	properties:['item: item']
})
```

```html
// Main.html 
<ul>
	<li *ngFor="#item of model.items">
		<item-renderer [item]="item" /> <!-- new [property] syntax -->
	</li>
</ul>
```
### Component sub-components
If a component A uses a component B, B must be declared in A @View.directives

```typescript
@Component({
	...,
	directives:[ ItemForm, ItemRenderer]
})

```

### Firebase / AngularFire storage 
Firebase library from https://github.com/Microsoft/ngconf2015demo / https://github.com/davideast/ng2do
```typescript
// ItemStore.ts
var data = new AngularFire(new Firebase('https://webapi.firebaseio-demo.com/test'));
this.store = data.asArray();

// add, remove... an item
this.store.add( ... );
this.store.remove( ... );

```

### For directive 
```html
<ul>
	<li *ngFor="#item of items" >{{ item.title }}</li>
</ul>
```

### If directive 
```html
<div *ngIf="aComponentProperty">...</div>
```

### Forms

```html
<form (ngSubmit)="save($event)" [ngFormModel]="todoForm">
	<div [hidden]="!hasError">Required</div>
	<input ngControl="title" #tInput type="text"
		   [value]="item.title"
		   (keyup)="onKey($event)"
	/>
	<button type="submit">Save</button>

</form>
```

```javascript

private todoForm:ControlGroup;

var fb = new FormBuilder()
this.todoForm = fb.group({
	title: [ this._item.title, Validators.required ]
});

if( this.todoForm.valid ){
	this.hasError = false;
	this.item.title = this.todoForm.value.title;
} else // ...
```

### Attribute Directive

**Host template** [itemRenderer.html](https://github.com/rxlabz/angular2-typescript-basics/blob/master/app/components/itemRenderer.html)

```html
<div class="content" *ngIf="!editable"
	 [toolTiper]="item.creationDate">
<!-- ... -->
</div>
```
**Attribute directive** [tooltiper.directive.ts](https://github.com/rxlabz/angular2-typescript-basics/blob/master/app/directives/tooltiper.directive.ts)
```typescript
@Directive({
        selector: '[toolTiper]',
        host: {
            '(mouseenter)': 'onMouseEnter()',
            '(mouseleave)': 'onMouseLeave()'
        }
    }
)
export class ToolTiper {

@Input('toolTiper') toolTipContent:string = '';

tooltipElement:ComponentRef;

constructor(
	private el:ElementRef,
	private container:ViewContainerRef,
	private renderer:Renderer,
	private loader:DynamicComponentLoader
	) {
        loader.loadNextToLocation(Tooltip, this.el)
            .then(ref => this.tooltipElement = ref);
    }
}
```


### <a href="" target="_blank">Material Design 2 alpha</a>

+ <a href="https://github.com/angular/material2/tree/master/src/demo-app" target="_blank">demo app</a>

+ <a href="https://design.google.com/icons/" target="_blank">Material Design icons</a>