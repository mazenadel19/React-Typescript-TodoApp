import { FC } from 'react'
import { Todo } from '../models/todos'
import  TodoItem  from './TodoItem';



const Todos: FC<{ items: Todo[] }> = props => {
	return (
		<ul>
			{props.items.map((item,i) => (
				<TodoItem key={i} title={item.title}/>
			))}
		</ul>
	)
}

export default Todos

/**
 * FC tells ts that this is a functional component
 * FC is a generic type, by adding <{}> to FC I'm adding to that genric type
 * telling it that it's props will be of the type specified in those {}
 * so now it has default children prop as any react component and it excpects to be passed whatever inside those <{}> thing
 */