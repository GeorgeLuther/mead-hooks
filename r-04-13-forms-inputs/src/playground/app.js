class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: [],
        };
        this.handleClearOptions = this.handleClearOptions.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
    }
    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if (options) {
                this.setState(() => ({ options }));
            };
        } catch (err) {
            //Do nothing at all
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        };
    }
    handleClearOptions() {
        this.setState(() => ({ options: [] }));
    }
    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => {
                return optionToRemove !== option;
            })
        }));
    }
    handlePick() {
        const optionIdx = Math.floor(Math.random() * this.state.options.length);
        alert('You should do ' + this.state.options[optionIdx]);
    }
    handleAddOption(newOption) {
        if (!newOption) {
            return 'Please type something first.'
        } else if (this.state.options.indexOf(newOption) > -1) {
            return 'Item already exists.'
        }
        this.setState(prevState => ({options: [...prevState.options, newOption]}));
    }
    render() {
        const subtitle = 'Put your life in the hands of a computer'
        return (
            <div>
                <Header subtitle={subtitle}/>
                <Action 
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options 
                    options={this.state.options} 
                    handleClearOptions={this.handleClearOptions}
                    handleDeleteOption = {this.handleDeleteOption}
                />
                <AddOption 
                    options={this.state.options} 
                    handleAddOption={this.handleAddOption}
                />
            </div>
        )       
    }
}

// IndecisionApp.defaultProps = {
//     options: []
// };

const Header = (props) => {
    return (
        <header>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </header>
    );
};

Header.defaultProps = {
    title: 'Indecision'
};

const Action = (props) => {
    return (
        <div>
            <button 
                onClick={props.handlePick} 
                disabled = {!props.hasOptions}
            >
                What should I do?</button>
        </div>
    );
};

const Options = (props) => {
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

const User = (props) => {
    return (
        <div>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
        </div>
    )
}

ReactDOM.render(<IndecisionApp options={['Land One','Chicken World']}/>, document.getElementById('app'));