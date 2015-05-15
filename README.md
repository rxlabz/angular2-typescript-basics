# angular2-typescript-basics
A very basic Angular2 (Alpha23) / Typescript(1.5 Alpha) app

( BROKEN IN Safari/IE - https://github.com/angular/angular/issues/1640 )

##Setup
Install node & npm : https://nodejs.org

Get Visual Code Studio : https://code.visualstudio.com

install typescript 1.5.0 & tsd :
```
npm install typescript -g
npm install tsd -g
npm install http-server -g
```
check https://www.youtube.com/watch?v=HmWm21cCAXM for setup details 

## Run

```bash
cd path/to/folder
# launch a server in default browser ( broken in safari )
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
Listen to event with the new (event) syntax

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
