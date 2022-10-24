class IndecessionApp extends React.Component {
    render() {
        const title = "Indeccesion App";
        const subtitle = "Put Your Life in Hands of Computer";
        const options = ["Option1","Option2","Option3"];

        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action />
                <Options option={options} />
                <Addoptions />

            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        )
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button>What Should I do?</button>
            </div>
        )
    }
}
class Options extends React.Component {
    render() {
        return (
            <div>
                <h3>Options are here</h3>
                <h3>{this.props.option.length}</h3>
                <Option/>
            </div>
        )
    }
}
class Option extends React.Component {
    render() {
        return (
            <div>
                <h3>Option component are here</h3>
                
            </div>
        )
    }
}
class Addoptions extends React.Component {
    render() {
        return (
            <div>
                <input type="text" placeholder="Add Your Options here " />
            </div>
        )
    }
}



const jsx = (
    <div>

    </div>
);

ReactDOM.render(<IndecessionApp/>, document.getElementById("app"))