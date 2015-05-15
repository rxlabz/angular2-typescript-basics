/// <reference path="../main.ts" />

export class MyModel{ 
	items :Array<string>	
	constructor(){
		console.log("MyModel constructor");
		this.items = [ "a" , "b" , "c" ];
	}
}
