class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Indecision',
            subtitle: 'Put your life in the hands of a computer',
            options: ['Thing one', 'Thing two', 'Thing three'],
        };
        this.handleClearOptions = this.handleClearOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
    }
    handleClearOptions() {
        //e.preventDefault();
        this.setState(() => {
            return {
                options: []
            };
        });
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
        return (
            <div>
                <Header title={this.state.title} subtitle={this.state.subtitle}/>
                <Action 
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options 
                    options={this.state.options} 
                    handleClearOptions={this.handleClearOptions}
                />
                <AddOption 
                    options={this.state.options} 
                    handleAddOption={this.handleAddOption}
                />
            </div>
        )       
    }
}

const Header = (props) => {
    return (
        <header>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </header>
    );
};

const Action = (props)=> {
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
            <p>You have {props.options.length} option(s).</p>
            {
                props.options && props.options.map(option => <Option key={option} info={option} />)
            }
        </div>
    );
};

const Option = (props) => {
    return (
        <label htmlFor={props.info}> {props.info}
            <input name="options" id={props.info} type="radio"></input>
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

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));