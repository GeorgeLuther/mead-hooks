import React from 'react'

export default class AddOption extends React.Component {
    state = {
        error: undefined
    };
    handleFormInput = (e) => {
        e.preventDefault();
        const newOption = e.target.elements.newOption.value.trim();
        const error = this.props.handleAddOption(newOption);
        this.setState(() => ({error}));
        if (!error) {
            e.target.elements.newOption.value = '';
        }
    };
    render() {
        return (
            <div>
                {this.state.error && <p className="add-option-error">{this.state.error}</p>}
                <form className="add-option" name="newOption" onSubmit={this.handleFormInput}>
                    <label className="a11y-label" htmlFor="newOption">Enter A New Option Here</label>
                    <input className="add-option__input" type="text" id="newOption" placeholder="your new option"></input>
                    <button className="button">Add Option</button>   
                </form>
            </div>
        );
    }
}
