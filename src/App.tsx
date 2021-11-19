import { useState } from 'react'
import './App.css'
import { NewTodo } from './components/NewTodo'
import Todos from './components/Todos'
import { Todo } from './models/todos'

function App() {
	const [todos, setTodos] = useState<Todo[]>([])
	//without overriding the generic type of usestate, our state will be an array of type never
	// ie an array that should never be touched or populated
	// to tell it that this array will be populated we add a type inside <>

	const addTodoHandler = (text: string) => {
		const newTodo = new Todo(text)
        setTodos(prevState => prevState.concat(newTodo)) //setting the state depending on previous state instance

	}

	return (
		<div className='App'>
			<NewTodo onAddTodo={addTodoHandler} />
			<Todos items={todos} />
		</div>
	)
}

export default App
