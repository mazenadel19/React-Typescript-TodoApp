import { FC } from 'react'

interface Props {
	title: string
}

export const TodoItem: FC<Props> = ({ title }) => {
	return <li >{title}</li>
}

export default TodoItem
