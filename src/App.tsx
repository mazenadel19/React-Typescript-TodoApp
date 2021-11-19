import './App.css'
import { NewTodo } from './components/NewTodo'
import Todos from './components/Todos'
import { Todo } from './models/todos'

const todos = [new Todo('learn react'), new Todo('learn ts')]

function App() {

    const addTodoHandler = ()=>{
        
    }

	return (
		<div className='App'>
			<NewTodo onAddTodo={addTodoHandler}/>
			<Todos items={todos} />
		</div>
	)
}

export default App
