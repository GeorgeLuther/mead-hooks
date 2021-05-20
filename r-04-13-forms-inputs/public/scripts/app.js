'use strict';

var isShown = false;

var onShowDetails = function onShowDetails() {
    isShown = !isShown;
    render();
};

var appRoot = document.getElementById('app');

var render = function render() {
    var jsx = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility Toggle'
        ),
        React.createElement(
            'button',
            { onClick: onShowDetails },
            isShown ? 'Hide details' : 'Show details'
        ),
        isShown && React.createElement(
            'p',
            { className: 'details' },
            'I am the details!!'
        )
    );
    ReactDOM.render(jsx, appRoot);
};

render();
