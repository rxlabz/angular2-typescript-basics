# angular2-typescript-basics
Basic Angular2 (beta0) / Typescript(1.7.5) / Firebase study app :
- Components with properties, events, directives, providers, templateURL and child components
- DI with providers
- custom (event) with EventEmitter
- stores data with Firebase
- uses NgFor & NgIf directives

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
```typescript
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
...
class NiceComponent{
  ...
  constructor(injectedInstance:AClassToInject){
    ...
  }
  ...
}
...
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