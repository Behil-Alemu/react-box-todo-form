import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import Box from './Box';
import NewBoxForm from './NewBoxForm';

const BoxList = () => {
	const [ boxList, setBoxList ] = useState([]);

	const addBox = (box) => {
		let newBox = { ...box, id: uuid() };
		setBoxList((boxList) => [ ...boxList, newBox ]);
	};

    console.log(boxList)
    const handleRemove =(id)=>{
        setBoxList(boxList =>boxList.filter( box => box.id !== id))

    }

	return (
		<div className="boxList">
			<NewBoxForm addBox={addBox} />
            {boxList.map(box=>(
                <Box color={box.color} width={box.width} height={box.height}  key={box.id} id={box.id} remove={handleRemove}/>
            ))}
			
		</div>
	);
};

export default BoxList;
