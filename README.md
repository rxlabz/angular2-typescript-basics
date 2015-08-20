# angular2-typescript-basics
Basic Angular2 (Alpha35) / Typescript(1.5) / Firebase demo app :
- Components with properties, events, directives, viewInjector, templateURL and child components
- DI with viewInjector
- custom (event) with EventEmitter
- stores data in Firebase
- uses NgFor & NgIf directives

##Setup
Install node & npm : https://nodejs.org

Get Visual Code Studio : https://code.visualstudio.com

install [typescript 1.5](http://www.typescriptlang.org) & [tsd](https://github.com/Definitelytyped/tsd#readme) :
```
npm install typescript -g
npm install tsd -g
npm install http-server -g
```
check https://angular.io/docs/js/latest/quickstart.html or https://www.youtube.com/watch?v=HmWm21cCAXM for setup details 

## typescript definitions

```
tsd query angular2 --save --action install
tsd query es6-promise --save --action install
tsd query rx --save --action install
tsd query rx-lite --save --action install
```
## Run
```bash
cd path/to/folder

# ts2js watcher
tsc -w

# launch a server in default browser 
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
  viewInjector:[AClassToInject]
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
		this.deleteItem.next(item);
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
	properties:['item: item']
})
```

```html
// Main.html 
<ul>
	<li *ng-for="#item of model.items"> 
		<item-renderer [item]="item" /> <!-- new [property] syntax -->
	</li>
</ul>
```
### Component sub-components
If a component A uses a component B, B must be declared in A @View.directives

```typescript
@View({
	...,
	directives:[NgFor, itemForm, itemRenderer]
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
	<li *ng-for="#item of items" >{{ item.title }}</li>
</ul>
```

### If directive 
```html
<div *ng-if="aComponentProperty">...</div>
```
