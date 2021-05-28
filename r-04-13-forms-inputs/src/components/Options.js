import React from 'react'
import Option from './Option'

//Options
export default (props) => (
    <div id="options">
        <div className="widget-header">
            <h3 className="widget-header__title">Your Options</h3>
            <button 
                className="button button--link"
                onClick={props.handleDeleteOptions}
            >
                Remove All
            </button>
        </div>
        {props.options.length === 0 && <p className="widget__message">Please add an option to get started!</p>}
        {
            /* change to ordered list?*/
            props.options && props.options.map((option, idx) => <Option key={option} info={option} count={idx+1} handleDeleteOption={props.handleDeleteOption}/>)
        }
    </div>
);