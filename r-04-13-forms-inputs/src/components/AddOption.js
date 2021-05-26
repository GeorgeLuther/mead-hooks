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
            <form name="newOption" onSubmit={this.handleFormInput}>
                {this.state.error && <p>{this.state.error}</p>}
                <label htmlFor="newOption">Enter A New Option Here</label>
                <br></br>
                <input type="text" id="newOption" placeholder="your new option"></input>
                <button>Add an option.</button>   
            </form>
        );
    }
}
