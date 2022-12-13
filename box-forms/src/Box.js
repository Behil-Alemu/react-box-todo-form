import React from "react";
import './Box.css';


const Box = ({ color, width=50, height=50, id , remove}) => {
    const removeBox = ()=>remove(id);
    return (
    <div className="eachBox">
      <div
        style={{
          backgroundColor: color,
          width: `${width}px`,
          height: `${height}px`,
        }}
        id={id}
      />
      <button onClick={removeBox} >X</button>
      </div>
    );
  };
  

export default Box;
