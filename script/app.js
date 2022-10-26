"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecessionApp = function (_React$Component) {
    _inherits(IndecessionApp, _React$Component);

    function IndecessionApp(props) {
        _classCallCheck(this, IndecessionApp);

        var _this = _possibleConstructorReturn(this, (IndecessionApp.__proto__ || Object.getPrototypeOf(IndecessionApp)).call(this, props));

        _this.handlepick = _this.handlepick.bind(_this);
        _this.removeAll = _this.removeAll.bind(_this);
        _this.addoption = _this.addoption.bind(_this);
        _this.state = {
            options: ["Option1", "Option2", "Option3"]
        };
        return _this;
    }

    _createClass(IndecessionApp, [{
        key: "handlepick",
        value: function handlepick() {
            var number = Math.floor(Math.random() * this.state.options.length);
            alert(this.state.options[number]);
        }
    }, {
        key: "removeAll",
        value: function removeAll() {
            this.setState(function () {
                return { options: [] };
            });
        }
    }, {
        key: "addoption",
        value: function addoption(value) {
            if (this.state.options.indexOf(value) > -1) {
                return alert("This options is Already Exist");
            }
            this.setState(function (prevState) {
                return {
                    options: prevState.options.concat([value])
                };
            });
        }
    }, {
        key: "render",
        value: function render() {
            var title = "Indeccesion App";
            var subtitle = "Put Your Life in Hands of Computer";
            // const options = ["Option1","Option2","Option3"];


            return React.createElement(
                "div",
                null,
                React.createElement(Header, { title: title, subtitle: subtitle }),
                React.createElement(Action, { handPick: this.handlepick, option: this.state.options.length }),
                React.createElement(Options, { removeAll: this.removeAll, option: this.state.options }),
                React.createElement(Addoptions, { addoption: this.addoption })
            );
        }
    }]);

    return IndecessionApp;
}(React.Component);

var Header = function (_React$Component2) {
    _inherits(Header, _React$Component2);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "h1",
                    null,
                    this.props.title
                ),
                React.createElement(
                    "h2",
                    null,
                    this.props.subtitle
                )
            );
        }
    }]);

    return Header;
}(React.Component);

var Action = function (_React$Component3) {
    _inherits(Action, _React$Component3);

    function Action() {
        _classCallCheck(this, Action);

        return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).apply(this, arguments));
    }

    _createClass(Action, [{
        key: "render",

        // handlepick(){
        //     alert("HandlePick")
        // }
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "button",
                    { onClick: this.props.handPick, disabled: !this.props.option },
                    "What Should I do?"
                )
            );
        }
    }]);

    return Action;
}(React.Component);

var Options = function (_React$Component4) {
    _inherits(Options, _React$Component4);

    function Options() {
        _classCallCheck(this, Options);

        return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).apply(this, arguments));
    }

    _createClass(Options, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "button",
                    { onClick: this.props.removeAll },
                    "Remove All"
                ),
                React.createElement(
                    "h3",
                    null,
                    "Options are here"
                ),
                React.createElement(
                    "h3",
                    null,
                    this.props.option.map(function (option) {
                        return React.createElement(
                            "p",
                            { key: option },
                            option
                        );
                    })
                ),
                React.createElement(Option, null)
            );
        }
    }]);

    return Options;
}(React.Component);

var Option = function (_React$Component5) {
    _inherits(Option, _React$Component5);

    function Option() {
        _classCallCheck(this, Option);

        return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
    }

    _createClass(Option, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "h3",
                    null,
                    "Option component are here"
                )
            );
        }
    }]);

    return Option;
}(React.Component);

var Addoptions = function (_React$Component6) {
    _inherits(Addoptions, _React$Component6);

    function Addoptions(props) {
        _classCallCheck(this, Addoptions);

        var _this6 = _possibleConstructorReturn(this, (Addoptions.__proto__ || Object.getPrototypeOf(Addoptions)).call(this, props));

        _this6.handleAddoption = _this6.handleAddoption.bind(_this6);

        return _this6;
    }

    _createClass(Addoptions, [{
        key: "handleAddoption",
        value: function handleAddoption(e) {
            e.preventDefault();
            var value = e.target.elements.options.value.trim();
            if (value) {
                this.props.addoption(value);
                e.target.elements.options.value = "";
            } else {
                alert("Please Enter the Valid Value");
            }
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "form",
                    { action: "", onSubmit: this.handleAddoption },
                    React.createElement("input", { name: "options", type: "text", placeholder: "Add Your Options here " }),
                    " ",
                    React.createElement(
                        "button",
                        null,
                        "Add Option"
                    )
                )
            );
        }
    }]);

    return Addoptions;
}(React.Component);

var jsx = React.createElement("div", null);

ReactDOM.render(React.createElement(IndecessionApp, null), document.getElementById("app"));
