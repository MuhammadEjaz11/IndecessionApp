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

const challange = {
    numbers:[1,2,3,5,6,4],
    multiplyby: 2,
    multiplier(){ return this.numbers.map((x)=> x * this.multiplyby)  
    }
}

let count = 0;
let addone = ()=>{
    count++
    counterfunc();
    console.log("add one")
}
let minus = ()=>{
    count--
    counterfunc();
    console.log("Minus One")
}
let Reset = ()=>{
    count=0
    counterfunc();
    console.log("Reset")
}
var approot = document.getElementById('app');
let counterfunc = ()=>{
    var template3 = (

        <div>
           <h1>Count: {count}</h1>
           <button onClick={addone}>+1</button> 
           <br/>
           <button onClick={minus}>-1</button> 
           <br/>
           <button onClick={Reset}>Reset</button>
        </div>
    );

    ReactDOM.render(template3, approot)
}





counterfunc();