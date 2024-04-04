import React, {useState} from "react";



function NewBoxForm({addBox}) {
    const INITIAL_STATE = {
        height: 0,
        width: 0,
        color: ""
    }
    const [formData, setFormData] = useState(INITIAL_STATE)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData( data => ({
            ...data,
            [name]: value
        }))
    }
    
    const handleSubmit = evt => {
        evt.preventDefault();
        addBox(formData)
        setFormData(INITIAL_STATE)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="height">Height</label>
            <input 
                type="number" 
                id="height" 
                name="height"
                value={formData.height}
                onChange={handleChange}
            />
            <label htmlFor="width">Width</label>
            <input 
                type="number" 
                id="width" 
                name="width"
                value={formData.width}
                onChange={handleChange}
            />
            <label htmlFor="color">Color</label>
            <input 
                type="text" 
                id="color" 
                name="color"
                value={formData.color}
                onChange={handleChange}
            />
            <button type="submit">Add a new box!</button>
        </form>
    )
}

export default NewBoxForm;