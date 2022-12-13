import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './Input.css';

const NewBoxForm = ({ addBox }) => {
	const INITIAL_STATE = { color: '', width: '', height: '' };

	const [ formData, setFormData ] = useState(INITIAL_STATE );

	const handleChange = (evt) => {
		const { name, value } = evt.target;
		setFormData((fData) => ({
			...fData,
			[name]: value
		}));
		//setFormData({ ...formData, [name]: value });
	};
	const handleSubmit = (evt) => {
		evt.preventDefault();
		addBox({...formData, id: uuid()});
		setFormData(INITIAL_STATE);
	};
	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="color">Color:</label>
			<input id="color" type="text" name="color" placeholder='Color' value={formData.color}    onChange={handleChange} />

			<label htmlFor="width">Width:</label>
			<input id="width"placeholder='Width' type="text" name="width" value={formData.width} onChange={handleChange} />

			<label htmlFor="height">Height:</label>
			<input id="height"  placeholder='Height' type="text" name="height" value={formData.height} onChange={handleChange} />
			<button data-testid='add-box-button' className='newBox'>Add a new box!</button>
		</form>
	);
};

export default NewBoxForm;

// it('should remove box', function() {
// 	const { getByTestId } = render(<NewBoxForm />);

// 	const addBoxButton = getByTestId('add-box-button');
// 	fireEvent.click(addBoxButton);

// 	const expectedBox = { color: 'red', width: 100, height: 200 };
// 	addBox(expectedBox);

// 	const boxes = getByTestId('box-list').children;
// 	expect(boxes).toHaveLength(1);
// 	expect(boxes[0]).toHaveStyle(`
// 	  background-color: ${expectedBox.color};
// 	  width: ${expectedBox.width}px;
// 	  height: ${expectedBox.height}px;
// 	`);
// });