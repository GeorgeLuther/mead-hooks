"use strict";

var isShown = false;

var onShowDetails = function onShowDetails() {
    isShown = !isShown;
    render();
};

var appRoot = document.getElementById('app');

var render = function render() {
    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            "Visibility Toggle"
        ),
        React.createElement(
            "button",
            { onClick: onShowDetails },
            "Show details"
        ),
        isShown && React.createElement(
            "p",
            { className: "details" },
            "I am the details!!"
        )
    );
    ReactDOM.render(template, appRoot);
};

render();
