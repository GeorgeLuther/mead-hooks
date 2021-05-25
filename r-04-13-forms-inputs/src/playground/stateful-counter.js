class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleIncrement = this.handleIncrement.bind(this);
        this.handleDecrement = this.handleDecrement.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {count: props.count};
        
    }
    componentDidMount() {
        try {
            const json = localStorage.getItem('count');
            const count = JSON.parse(json);
            if (!isNaN(count)) {
                this.setState(()=> ({ count }));
            }
        } catch (err) {
            //You could send an error here
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            const json = JSON.stringify(this.state.count);
            localStorage.setItem('count', json);
        }
    }
    handleIncrement(){
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        });
    }
    handleDecrement(){
        this.setState((prevState) =>  {
            return {
                count: prevState.count-1
            };
        });
    }
    handleReset(){
        this.setState({count: this.props.count})
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
// Counter.defaultProps = {
//     count: 0
// };

ReactDOM.render(<Counter count = {2} />,  document.getElementById('app'));

