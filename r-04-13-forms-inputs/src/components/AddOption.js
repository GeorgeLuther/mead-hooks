import React from 'react'

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleFormInput = this.handleFormInput.bind(this);
        this.state = {
            error: undefined
        };
    }
    handleFormInput(e) {
        e.preventDefault();
        const newOption = e.target.elements.newOption.value.trim();
        const error = this.props.handleAddOption(newOption);
        this.setState(() => ({error}))

        if (!error) {
            e.target.elements.newOption.value = '';
        }
    }
    render() {
        return (
            <form name="newOption" onSubmit={this.handleFormInput}>
                {this.state.error && <p>{this.state.error}</p>}
                <label htmlFor="newOption">Enter A New Option Here</label>
                <br></br>
                <input type="text" id="newOption" placeholder="your new option"></input>
                <button>Add an option.</button>   
            </form>
        )
    }
}

export default AddOption
