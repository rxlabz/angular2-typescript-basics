export class Todo{
	title:string;
	completed:boolean;
	
	constructor(t:string, c:boolean = false)
	{
		this.title = t;
		this.completed = c;
	}
}