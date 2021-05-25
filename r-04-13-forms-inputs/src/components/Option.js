import React from 'react'

const Option = (props) => {
    const handleDelete = () => props.handleDeleteOption(props.info)
    return (
        <label htmlFor={props.info}> {props.info}
            <input name="options" id={props.info} type="radio"></input>
            <button 
                name={props.info} 
                onClick={handleDelete}
            >
                Remove
            </button>
        </label>
    );
};

export default Option