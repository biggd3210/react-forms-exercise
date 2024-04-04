import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

function BoxList () {
    const [boxes, setBoxes] = useState([]);
    
    const addBox = (boxData) => {
        let newBox = { ...boxData, id: uuid() };
        let currBoxes = [ ...boxes, newBox ]
        setBoxes(currBoxes);
    }
    const removeBox = (id) => { 
        setBoxes(boxes => boxes.filter(box => box.id !== id))  
    }
    const boxComponents = boxes.map( ({id, height, width, color}) => 
        <Box 
            key={id}
            id={id}
            height={height}
            width={width}
            color={color}
            handleRemove={removeBox}
        />
    )
    return (
        <div>
            <div>
                <NewBoxForm addBox={addBox}/>
            </div>
            <div>
            {boxComponents}
            </div>
        </div>
    )
}

export default BoxList;