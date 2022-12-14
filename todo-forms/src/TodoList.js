import React, { useState } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';
import { v4 as uuid } from 'uuid';

const TodoList = () => {
	const [ todos, setTodo ] = useState([]);

	const addTodo = (todo) => {
		let newTodo = { ...todo, id: uuid() };
		setTodo((todos) => [ ...todos, newTodo ]);
	};

	const handleRemove = (id) => {
		setTodo((todos) => todos.filter((todo) => todo.id !== id));
	};

	return (
		<div>
			<NewTodoForm addTodo={addTodo} />
			<ul>
                {todos.map((todo) => 
                <Todo task={todo.task} key={todo.id} id={todo.id} remove={handleRemove} 
                />)}
            </ul>
		</div>
	);
};

export default TodoList;
