import React from 'react'

const Option = (props) => {
    const handleDelete = () => props.handleDeleteOption(props.info)
    return (
        <div className="option">
            <p className="option__text">{props.count+'. '}{props.info}</p>
            <button 
                name={props.info}
                className="button button--link"
                onClick={handleDelete}
            >
                Remove
            </button>
        </div>
    );
};

export default Option