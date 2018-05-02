import React from 'react';
import classes from './Person.css'
import withClass from '../../../hoc/withClass'
import Aux from '../../../hoc/Aux'


class Person extends React.Component {
    render () {
        return (
            <Aux>
                <p onClick={this.props.click}> I'm {this.props.name} and I'm {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type='text' onChange={this.props.changed} value={this.props.name}/>
            </Aux>
        )
        
    }
}

export default withClass(Person, classes.Person)