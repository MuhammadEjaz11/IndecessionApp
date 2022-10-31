"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Counter = function (_React$Component) {
    _inherits(Counter, _React$Component);

    function Counter(props) {
        _classCallCheck(this, Counter);

        var _this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));

        _this.addone = _this.addone.bind(_this);
        _this.minusone = _this.minusone.bind(_this);
        _this.reset = _this.reset.bind(_this);
        _this.state = {
            count: 0
        };
        return _this;
    }

    _createClass(Counter, [{
        key: "addone",
        value: function addone() {
            console.log("addone");
            this.setState(function (prevState) {
                return {
                    count: prevState.count + 1
                };
            });
        }
    }, {
        key: "minusone",
        value: function minusone() {
            console.log("minusone");
            this.setState(function (prevState) {
                return {
                    count: prevState.count - 1
                };
            });
        }
    }, {
        key: "reset",
        value: function reset() {
            console.log("reset");
            this.setState(function (prevState) {
                return {
                    count: 0
                };
            });
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            var count1 = localStorage.getItem('count');
            var number = parseInt(count1);
            this.setState(function () {
                return { count: number };
            });
        }
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
            var count = this.state.count;
            console.log(count);
            localStorage.setItem("count", count);
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "h1",
                    null,
                    "Counter: ",
                    this.state.count,
                    " "
                ),
                React.createElement(
                    "button",
                    { onClick: this.addone },
                    "+1"
                ),
                React.createElement(
                    "button",
                    { onClick: this.minusone },
                    "-1"
                ),
                React.createElement(
                    "button",
                    { onClick: this.reset },
                    "Reset"
                )
            );
        }
    }]);

    return Counter;
}(React.Component);

ReactDOM.render(React.createElement(Counter, null), document.getElementById("app"));

// const challange = {
//     numbers:[1,2,3,5,6,4],
//     multiplyby: 2,
//     multiplier(){ return this.numbers.map((x)=> x * this.multiplyby)  
//     }
// }

// let count = 0;
// let addone = ()=>{
//     count++
//     counterfunc();
//     console.log("add one")
// }
// let minus = ()=>{
//     count--
//     counterfunc();
//     console.log("Minus One")
// }
// let Reset = ()=>{
//     count=0
//     counterfunc();
//     console.log("Reset")
// }
// var approot = document.getElementById('app');
// let counterfunc = ()=>{
//     var template3 = (

//         <div>
//            <h1>Count: {count}</h1>
//            <button onClick={addone}>+1</button> 
//            <br/>
//            <button onClick={minus}>-1</button> 
//            <br/>
//            <button onClick={Reset}>Reset</button>
//         </div>
//     );

//     ReactDOM.render(template3, approot)
// }

// counterfunc();
