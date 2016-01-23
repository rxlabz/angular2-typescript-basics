export class Todo{
	title:string;
	completed:boolean;
    creationDate:string;

    constructor(t:string, d:Date)
	{
		this.title = t;
        this.creationDate = d.toDateString();
        console.log('date', this.creationDate);
	}
}