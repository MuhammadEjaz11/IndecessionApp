var approot = document.getElementById('app');

let tooglefunc =()=>{
let detail = document.getElementById('toogle');
let btn = document.getElementById('btn');
if(detail.style.display === "block"){
    detail.style.display = "none"
    btn.innerText = "Show Details"
}else{
    btn.innerText = "Hide Details"
    detail.style.display = "block"
}
}

let toogle = (
    <div>
    <h1>Click on the Button</h1>
    <button id="btn" onClick={tooglefunc}>Show Details</button>
    <p id="toogle">Here are the details</p>
    </div>
)







ReactDOM.render(toogle, approot)