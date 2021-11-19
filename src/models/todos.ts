// class, type and interface seems to be all interchangable with typescript
export class Todo {
	id: string
	title: string

	constructor(todoText: string) {
		this.id = new Date().toISOString()
		this.title = todoText
	}
}
