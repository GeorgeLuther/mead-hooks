class Visibility extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: false,
        };
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    }
    handleToggleVisibility() {
        this.setState(prevState => ({isVisible: !prevState.isVisible}));
    }
    render() {
        return (
            <div>
                <h1>Stateful Visibility</h1>
                <button onClick={this.handleToggleVisibility}>
                  {this.state.isVisible ? 'Hide details' : 'Show details'}
                </button>
                {
                  this.state.isVisible && <p>I am the details, hear me roar.</p>
                }
            </div>
        );
    }
}

ReactDOM.render(<Visibility/>, document.getElementById('app'));