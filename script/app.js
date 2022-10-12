"use strict";

console.log("App is running");

var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Hello World"
    ),
    React.createElement(
        "p",
        null,
        "Hello"
    )
);
var template2 = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Ejaz"
    ),
    React.createElement(
        "p",
        null,
        "23"
    ),
    React.createElement(
        "p",
        null,
        "Karachi"
    )
);

var approot = document.getElementById('app');

ReactDOM.render(template2, approot);
