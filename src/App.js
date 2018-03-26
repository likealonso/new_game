import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'Sam', age: 27 },
      { name: 'Alonso', age: 33 },
      { name: 'Patrick', age: 23 },
    ],
    otherState: 'whatever'
  }

  switchNameHandler = () => {
    this.setState({
      persons: [
        { name: 'Eric', age: 30 },
        { name: 'Alonso', age: 33 },
        { name: 'Patrick', age: 24 },
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>This is my new game</h1>
        <p>Or is it?</p>
        <button onClick={this.switchNameHandler}>Switch name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
        
      </div>

    );
    // compiles to ...
    // return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'This isn\'t my new game'))
  }
}

export default App;
