import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'
import withClass from '../hoc/withClass'
import Aux from '../hoc/Aux'


class App extends Component {
  constructor(props) {
    super(props);
    console.log('APP.JS inside constructor ', props)
    this.state = {
      persons: [
        { id: 1, name: 'Sam', age: 27 },
        { id: 2, name: 'Alonso', age: 33 },
        { id: 3, name: 'Patrick', age: 23 },
      ],
      otherState: 'whatever',
      showPersons: false
    }
  }

  componentWillMount() {
    console.log('APP.JS inside componentWillMount ')
  }
  
  componentDidMount() {
    console.log('APP.JS inside componentDidMount ')
  }
  
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('UPDATE App.js inside shouldComponentUpdate', nextProps, 'whoa', nextState,'OK', this.props.persons)
  //   return true
  // }

  componentWilUpdate(nextProps, nextState) {
    console.log('update App.js inside componentWillUpdate', nextProps, nextState)
  }

  componentDidUpdate() {
    console.log('update App.js inside componentDidUpdate')
  }

  nameChangedHandler = (event, id) => {
    //index number of person
    const personIndex = this.state.persons.findIndex(p => p.id === id)
    
    //one person object w id, name, age
    const person = {...this.state.persons[personIndex]}
    // const person = Object.assign({}, this.state.persons[personIndex]) //same as above line
    
    //name changes as you type
    person.name = event.target.value;
    
    //all persons objects as they change with event.target.value
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
    console.log('APP.JS in render')
    let persons = null

    if (this.state.showPersons) {
      persons = <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler} />
    }

    return (
        <Aux>
        <button onClick={() => this.setState({showPersons: true})}>Show persons</button>
          <Cockpit 
            showPersons={this.state.showPersons} 
            persons={this.state.persons}  
            clicked={this.togglePersonHandler}
          />
          {persons}
        </Aux>
    );
    // compiles to ...
    // return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'This isn\'t my new game'))
  }
}

export default withClass(App, classes.App)
