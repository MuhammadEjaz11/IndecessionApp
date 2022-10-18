"use strict";

console.log("App is running");
var approot = document.getElementById('app');

var user = {
    title: "Ejaz",
    age: "21",
    options: []
};
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
        "Ejas"
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
var removeItem = function removeItem() {
    if (user.options) {
        user.options.splice(0, user.options.length);
        renderfun();
    }
};
var formsubmitted = function formsubmitted(e) {

    e.preventDefault();
    var value = e.target.elements.options.value;
    if (value) {

        user.options.push(value);
        e.target.elements.options.value = "";
        renderfun();
    } else {
        alert("Please Enter the Value");
    }
};
var renderfun = function renderfun() {
    var template3 = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            "Indecession App"
        ),
        React.createElement(
            "p",
            null,
            "Your Tasks"
        ),
        React.createElement(
            "form",
            { onSubmit: formsubmitted },
            React.createElement("input", { type: "text", name: "options" }),
            React.createElement("br", null),
            React.createElement(
                "button",
                null,
                "Add task"
            )
        ),
        React.createElement(
            "button",
            { onClick: removeItem },
            "Remove All"
        ),
        React.createElement(
            "ol",
            null,
            user.options.map(function (x) {
                return React.createElement(
                    "li",
                    null,
                    x
                );
            })
        )
    );

    ReactDOM.render(template3, approot);
};
renderfun();
