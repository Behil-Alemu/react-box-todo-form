import React from "react";



const Box = ({ task, id , remove}) => {
    const removeBox = ()=>remove(id);
    return (
    <>
      <li>{task}</li>
      <button onClick={removeBox} >X</button>
</>
    );
  };
  

export default Box;
