import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'Sam', age: 27 },
      { id: 2, name: 'Alonso', age: 33 },
      { id: 3, name: 'Patrick', age: 23 },
    ],
    otherState: 'whatever',
    showPersons: false
  }

  
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id)
    const person = {...this.state.persons[personIndex]}
    // const person = Object.assign({}, this.state.persons[personIndex]) //same as above line
    person.name = event.target.value;
    const persons = [...this.state.persons]
    persons[personIndex] = person

    this.setState({
      persons: persons
    })
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice(); //copies the array and returns a new one
    const persons = [...this.state.persons]; // modern version of above
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
    })
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
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

    let persons = null
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => 
            <Person 
              click={() => this.deletePersonHandler(index)}
              name={person.name} 
              age={person.age} 
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)}
            />
          )}
        </div> 
      )
    }

    return (
      <div className="App">
        <h1>This is my new game</h1>
        <p>Or is it?</p>
        <button 
          style={style}
          onClick={this.togglePersonHandler}>Toggle Persons</button>
        {persons}
      </div>

    );
    // compiles to ...
    // return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'This isn\'t my new game'))
  }
}

export default App;
