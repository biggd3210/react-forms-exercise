import React from 'react';


function Box ({id, color, height, width, handleRemove}) {
    const remove = () => handleRemove(id);
    return (
        <div>
        <div
        style={{backgroundColor: color, height: parseInt(height), width: parseInt(width)}}
        />
        <button onClick={remove}>Remove The Box!</button>
        </div>
    )
}

export default Box;