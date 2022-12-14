import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

const NewListItemForm = ({ addTodo }) => {
	const [ task, setTask ] = useState('');

	const handleChange = (evt) => {
		const { value } = evt.target;
		setTask(value);
	};

	const handleSubmit = (evt) => {
		evt.preventDefault();
		addTodo({ task, id: uuid() });
		setTask('');
	};

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="task">My Tasks:</label>
			<input id="task" placeholder="TO-DO" type="text" name="task" value={task} onChange={handleChange} />
			<button className="addTaskBtn">Add a new tasks!</button>
		</form>
	);
};

export default NewListItemForm;
