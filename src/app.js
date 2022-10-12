console.log("App is running");

var template = (

    <div>

        <h1>Hello World</h1>
        <p>Hello</p>
    </div>
);
var template2 = (

    <div>
        <h1>Ejaz</h1>
        <p>23</p>
        <p>Karachi</p>
    </div>
);

var approot = document.getElementById('app');

ReactDOM.render(template2, approot)