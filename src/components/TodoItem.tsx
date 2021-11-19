import { FC } from 'react'
import styles from './TodoItem.module.css'
interface Props {
	title: string
}

export const TodoItem: FC<Props> = ({ title }) => {
	return <li className={styles.item}>{title}</li>
}

export default TodoItem
