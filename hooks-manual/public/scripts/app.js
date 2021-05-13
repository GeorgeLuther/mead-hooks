console.log('App is running!')

// var template = <p>I am a paragraph in JSX</p>
var template = React.createElement(
    "h1",
    { id: "app-id"},
    "I am a paragraph"
);
var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);