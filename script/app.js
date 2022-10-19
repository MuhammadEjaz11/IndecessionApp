'use strict';

var approot = document.getElementById('app');

var tooglefunc = function tooglefunc() {
    var detail = document.getElementById('toogle');
    var btn = document.getElementById('btn');
    if (detail.style.display === "block") {
        detail.style.display = "none";
        btn.innerText = "Show Details";
    } else {
        btn.innerText = "Hide Details";
        detail.style.display = "block";
    }
};

var toogle = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Click on the Button'
    ),
    React.createElement(
        'button',
        { id: 'btn', onClick: tooglefunc },
        'Show Details'
    ),
    React.createElement(
        'p',
        { id: 'toogle' },
        'Here are the details'
    )
);

ReactDOM.render(toogle, approot);
