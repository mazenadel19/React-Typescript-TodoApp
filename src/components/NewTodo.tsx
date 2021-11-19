import { FC, useRef } from 'react'

interface Props {
	onAddTodo: (a: string) => void
}

export const NewTodo: FC<Props> = ({ onAddTodo }) => {
	const inputRef = useRef<HTMLInputElement>(null)

	const submitHandler = (e: React.FormEvent) => {
		e.preventDefault()
		// const enteredText = inputRef.current?.value.trim()
		//entered text will either be undefined or a string,
		// the question mark refers that im not sure if i'll be able to get the value on that object
		const enteredText = inputRef.current!.value.trim()
		//entered text will ONLY BE STRING, the exclamation mark refers that im sure that i'll be able to get the value on that object
		if (enteredText.length === 0) {
			return
		}
		onAddTodo(enteredText)
	}

	return (
		<form onSubmit={submitHandler}>
			<label htmlFor='enteredText'>Enter a todo:</label> <br />
			<input type='text' id='enteredText' ref={inputRef} /> <br />
			<button type='submit'>Add</button>
		</form>
	)
}

export default NewTodo
