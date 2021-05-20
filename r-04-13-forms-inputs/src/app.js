
class IndecisionApp extends React.Component {
    render() {
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer'
        const options = ['Thing one', 'Thing two', 'Thing three']

        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action />
                <Options options={options} />
                <AddOption options={options}/>
            </div>
        )       
    }
}

class Header extends React.Component {
    render() {
        return (
            <header>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </header>
        )
    }
}

class Action extends React.Component {
    handlePick() {
        alert('Handled pick')
    }
    render() {
        return (
            <div>
                <button onClick={this.handlePick}>What should I do?</button>
            </div>
        )
    }
}


class Options extends React.Component {
    handleRemoveAll() {
        alert('Handled remove all')
    }
    render() {
        return (
            <form id="options">
                <button onClick={this.handleRemoveAll}>Remove All</button>
                <p>You have {this.props.options.length} option(s).</p>
                {
                  this.props.options && this.props.options.map(option => <Option key={option} info={option} />)
                }
            </form>
        )
    }
}

class Option extends React.Component {
    render() {
        return (
            <label htmlFor={this.props.info}> {this.props.info}
                <input name="options" id={this.props.info} type="radio"></input>
            </label>
        )
    }
}
class AddOption extends React.Component {
    onSubmit(e) {
        e.preventDefault();
        if (e.target.elements.newOption.value) alert(`You chose ${e.target.elements.newOption.value}`);
    }
    render() {
        return (
            <form name="newOption" onSubmit={this.onSubmit}>
                <label htmlFor="newOption">Enter A New Option Here</label>
                <br></br>
                <input type="text" id="newOption" placeholder="your new option"></input>
                <button>Add an option.</button>   
            </form>
        )
    }
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));