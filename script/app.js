'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Toogle = function (_React$Component) {
    _inherits(Toogle, _React$Component);

    function Toogle() {
        _classCallCheck(this, Toogle);

        var _this = _possibleConstructorReturn(this, (Toogle.__proto__ || Object.getPrototypeOf(Toogle)).call(this));

        _this.tooglefun = _this.tooglefun.bind(_this);
        _this.state = {
            visibility: false
        };
        return _this;
    }

    _createClass(Toogle, [{
        key: 'tooglefun',
        value: function tooglefun() {

            if (this.state.visibility) {
                this.setState(function () {
                    return {
                        visibility: false
                    };
                });
            } else {
                this.setState(function () {
                    return {
                        visibility: true
                    };
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'button',
                    { onClick: this.tooglefun },
                    'Show Details'
                ),
                this.state.visibility ? React.createElement(
                    'h1',
                    null,
                    'This is Toogle'
                ) : React.createElement('h1', null)
            );
        }
    }]);

    return Toogle;
}(React.Component);

// var approot = document.getElementById('app');

// let tooglefunc =()=>{
// let detail = document.getElementById('toogle');
// let btn = document.getElementById('btn');
// if(detail.style.display === "block"){
//     detail.style.display = "none"
//     btn.innerText = "Show Details"
// }else{
//     btn.innerText = "Hide Details"
//     detail.style.display = "block"
// }
// }

// let toogle = (
//     <div>
//     <h1>Click on the Button</h1>
//     <button id="btn" onClick={tooglefunc}>Show Details</button>
//     <p id="toogle">Here are the details</p>
//     </div>
// )


ReactDOM.render(React.createElement(Toogle, null), document.getElementById('app'));
