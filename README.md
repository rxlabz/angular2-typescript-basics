# angular2-typescript-basics
A very basic Angular2 (Alpha23) / Typescript(1.5 Alpha) app

( BROKEN IN Safari/IE - https://github.com/angular/angular/issues/1640 )

##Setup
install node & npm : https://nodejs.org
install typescript 1.5.0 & tsd :

Get Visual Code Studio : https://code.visualstudio.com

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
### Components
```typescript
@Component({
  selector:'nice-component'
})
@View({
  templateUrl:"path/to/NiceComponent.html"
})
class NiceComponent{
  ...
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
		this.deleteItem = new EventEmitter()
	}
	
	removeItem( item:string ){
		this.deleteItem.next()
		console.log('remove ' + item);
	}
}
```
