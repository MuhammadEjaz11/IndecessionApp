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

var challange = {
    numbers: [1, 2, 3, 5, 6, 4],
    multiplyby: 2,
    multiplier: function multiplier() {
        var _this = this;

        return this.numbers.map(function (x) {
            return x * _this.multiplyby;
        });
    }
};

var count = 0;
var addone = function addone() {
    count++;
    counterfunc();
    console.log("add one");
};
var minus = function minus() {
    count--;
    counterfunc();
    console.log("Minus One");
};
var Reset = function Reset() {
    count = 0;
    counterfunc();
    console.log("Reset");
};
var approot = document.getElementById('app');
var counterfunc = function counterfunc() {
    var template3 = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            "Count: ",
            count
        ),
        React.createElement(
            "button",
            { onClick: addone },
            "+1"
        ),
        React.createElement("br", null),
        React.createElement(
            "button",
            { onClick: minus },
            "-1"
        ),
        React.createElement("br", null),
        React.createElement(
            "button",
            { onClick: Reset },
            "Reset"
        )
    );

    ReactDOM.render(template3, approot);
};

counterfunc();
