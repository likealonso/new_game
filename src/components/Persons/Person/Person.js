import React from 'react';
import classes from './Person.css'
import withClass from '../../../hoc/withClass'
import Aux from '../../../hoc/Aux'
import PropTypes from 'prop-types'

class Person extends React.Component {
    constructor(props) {
        super(props);
        this.inputElement = React.createRef();
    }
    componentDidMount(){
        if (this.props.position === 1) {
            this.inputElement.current.focus()
        }
    }

    focus(){
        this.inputElement.current.focus()
    }
    render () {
        return (
            <Aux>
                <p onClick={this.props.click}> I'm {this.props.name} and I'm {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input 
                    ref = {this.inputElement}
                    type='text' 
                    onChange={this.props.changed} 
                    value={this.props.name}/>
            </Aux>
        )
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string, 
    age: PropTypes.number,
    changed: PropTypes.func
}

export default withClass(Person, classes.Person)