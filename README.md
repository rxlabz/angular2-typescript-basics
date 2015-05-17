# angular2-typescript-basics
A simple Angular2 (Alpha23) / Typescript(1.5 Beta) / Firebase demo app :
- Components with properties, events, directives, injectables, templateURL and child components
- DI with injectables
- custom (event) with EventEmitter
- stores data in Firebase
- user For & If directives

##Setup
Install node & npm : https://nodejs.org

Get Visual Code Studio : https://code.visualstudio.com

install [typescript 1.5.0](http://www.typescriptlang.org) & [tsd](https://github.com/Definitelytyped/tsd#readme) :
```
npm install typescript -g
npm install tsd -g
npm install http-server -g
```
check https://angular.io/docs/js/latest/quickstart.html or https://www.youtube.com/watch?v=HmWm21cCAXM for setup details 

## Run
```bash
cd path/to/folder

# ts2js watcher
tsc -w

# launch a server in default browser 
# !!! BROKEN IN Safari/IE - https://github.com/angular/angular/issues/1640
http-server -o
```
## Angular 2
### Component Base
```typescript
@Component({
  selector:'nice-component'
})
@View({
  templateUrl:"path/to/NiceComponent.html"
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
  injectables:[AClassToInject]
})
...
class NiceComponent{
  ...
  constructor(injectedInstance:AClassToInject){
    ...
  }
  ...
}
```

### EventEmitter
```typescript
import { Component, View, EventEmitter } from "angular2/angular2";

@Component({
	...,
	events:['deleteItem']
})
...
export class itemRenderer{
	...
	deleteItem:EventEmitter
	
	constructor(){
		this.deleteItem = new EventEmitter();
	}
	
	removeItem( item:string ){
		this.deleteItem.next();
		console.log('remove ' + item);
	}
}
```
Listen to an event with the new (event) syntax

```html
<item-renderer (delete-item)="removeItem(item)" />
```

### Component properties
```typescript
// itemRenderer.ts
import { Component, View, EventEmitter } from "angular2/angular2";

@Component({
	...,
	properties:{item: "item"}
})
```

```html
// Main.html 
<ul>
	<li *for="#item of model.items"> 
		<item-renderer [item]="item" /> <!-- new [property] syntax -->
	</li>
</ul>
```
### Component sub-components
If a component A uses a component B, B must be declared in A @View.directives

```typescript
@View({
	...,
	directives:[For, itemForm, itemRenderer]
})

```

### Firebase / AngularFire storage 
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
	<li *for="#item of items" >{{ item.title }}</li>
</ul>
```

### If directive 
```html
<div *if="aComponentProperty">...</div>
```