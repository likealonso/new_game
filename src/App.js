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

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 30 },
        { name: 'Alonso', age: 33 },
        { name: 'Patrick', age: 24 },
      ]
    })
  }
  
  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Sam', age: 27 },
        { name: event.target.value, age: 33 },
        { name: 'Patrick', age: 23 },
      ]
    })
    
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'Arial',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>This is my new game</h1>
        <p>Or is it?</p>
        <button 
          style={style}
          onClick={ () =>this.switchNameHandler('Samuel') }>Switch name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}
        />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Sam!!')} 
          changed={this.nameChangedHandler}>
          My hobbies: Sports
        </Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}
        />
        
      </div>

    );
    // compiles to ...
    // return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'This isn\'t my new game'))
  }
}

export default App;
