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
    handlepick(){
        alert("HandlePick")
    }
    render() {
        return (
            <div>
                <button onClick={this.handlepick}>What Should I do?</button>
            </div>
        )
    }
}
class Options extends React.Component {
    Removeall(){
        alert("RemoveAll")
    }
    render() {
        return (
            <div>
                <button onClick={this.Removeall}>Remove All</button>
                <h3>Options are here</h3>
                <h3>{this.props.option.map((x)=>{return <p>{x}</p>})}</h3>
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
    handleAddoption(e){
        e.preventDefault();
        const value = e.target.elements.options.value.trim();
        if(value){
            alert(value)
        }else{
            return
        }
    }
    render() {
        return (
            <div>
                <form action="" onSubmit={this.handleAddoption}>
                <input name="options"type="text" placeholder="Add Your Options here " /> <button>Add Option</button>

                </form>
            </div>
        )
    }
}



const jsx = (
    <div>

    </div>
);

ReactDOM.render(<IndecessionApp/>, document.getElementById("app"))