import { FC } from 'react'
import { Todo } from '../models/todos'
import TodoItem from './TodoItem'
import styles from './Todos.module.css'

const Todos: FC<{ items: Todo[]; onItemRemoved: (todoId: string) => void }> =
	props => {
		return (
			<ul className={styles.todos}>
				{props.items.map((item) => (
					<TodoItem
                        key={item.id}
                        id={item.id}
						title={item.title}
						onItemRemoved={props.onItemRemoved}
					/>
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
