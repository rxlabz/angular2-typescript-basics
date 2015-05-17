export class MyModel{ 
	items :Array<Todo>	
	constructor(){
		this.items = [ new Todo("a") , new Todo("b") , new Todo("c") ];
	}
}

export class Todo{
	title:string;
	completed:boolean;
	
	constructor(t:string, c:boolean = false)
	{
		this.title = t;
		this.completed = c;
	}
	
}