import React, {Component} from 'react';
import './App.css'
import Clock from './Clock'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deadline: "Dec 25, 2022",
            newDeadline: ''
        }
    }
    changeDeadline() {
        this.setState({deadline: this.state.newDeadline})
    }

    render() {
        return(
            <div className="App">
                <h1>Countdown Champ</h1>
                <div className="App-title">Countdown to {this.state.deadline}</div>
                <Clock deadline = {this.state.deadline}/>
                <div className="input-box-submit">
                    <input type="text" placeholder="New date" className = "input-box"
                    onChange={event =>this.setState({newDeadline: event.target.value})}/>
                    <button onClick = {() => this.changeDeadline()}>Submit</button>
                </div>
            </div>
        )};
}

export default App;