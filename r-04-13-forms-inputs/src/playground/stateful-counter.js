class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleIncrement = this.handleIncrement.bind(this);
        this.handleDecrement = this.handleDecrement.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {count: 0};
        
    }
    handleIncrement(){
        this.setState(prevState => {
            return {count: this.state.count+1}
        }
      );
    }
    handleDecrement(){
        this.setState({count: this.state.count-1});
    }
    handleReset(){
        this.setState({count: 0})
    }
    render() {
        document.title = `Your count is ${this.state.count}`
        return (
            <div>
                <h1>Stateful Count: {this.state.count}</h1>
                <button onClick={this.handleIncrement}>increment</button>
                <button onClick={this.handleDecrement}>decrement</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        );
    }
}

ReactDOM.render(<Counter />,  document.getElementById('app'));

