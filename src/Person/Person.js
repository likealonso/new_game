import React from 'react';
import './Person.css'
import Radium from 'radium'

const person = ( props ) => {
    const style = {
        '@media (min-width: 500px)':{
            width: '450px',
            backgroundColor: 'green'
        }
    }
    return (
        <div className="Person" style={style}>
            <p onClick={props.click}> I'm {props.name} and I'm {props.age} years old!</p>
            <p>{props.children}</p>
            <input type='text' onChange={props.changed} value={props.name}/>
        </div>
    )
}


// class Person extends React.Component {

// }

export default Radium(person)