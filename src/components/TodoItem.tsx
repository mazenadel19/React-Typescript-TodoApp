import { FC } from 'react'
import styles from './TodoItem.module.css'
interface Props {
	id: string
	title: string
	onItemRemoved: (todoId: string) => void
}

export const TodoItem: FC<Props> = ({ title, id,onItemRemoved }) => {
	return (
		<li className={styles.item} onClick={() => onItemRemoved(id)}>
			{title}
		</li>
	)
}

export default TodoItem
