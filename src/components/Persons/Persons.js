import React from 'react'
import Person from './Person/Person'

class Persons extends React.Component {

  componentWillReceiveProps(nextProps) {
    console.log('UPDATE persons.js inside componentWillReceiveProps', nextProps)
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('UPDATE persons.js inside shouldComponentUpdate', nextProps, 'whoa', nextState,'OK', this.props.persons)
    return nextProps.persons !== this.props.persons
    // return true
  }

  componentWilUpdate(nextProps, nextState) {
    console.log('update persons.js inside componentWillUpdate', nextProps, nextState)
  }

  componentDidUpdate() {
    console.log('update persons.js inside componentDidUpdate')
  }

  render() {
    return this.props.persons.map((person, index) => {
      return <Person 
      click={() => this.props.clicked(index)}
      position={index}
      name={person.name} 
      age={person.age} 
      key={person.id}
      changed={(event) => this.props.changed(event, person.id)}
      />
    })
  }
}
    
export default Persons