import React from 'react'
import Option from './Option'

export default (props) => {
    return (
        <div id="options">
            <button onClick={props.handleClearOptions}>Remove All</button>
            {props.options.length === 0 && <p>Please add an option to get started!</p>}
            <p>You have {props.options.length} option(s).</p>
            {
                props.options && props.options.map(option => <Option key={option} info={option} handleDeleteOption={props.handleDeleteOption}/>)
            }
        </div>
    );
};