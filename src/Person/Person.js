import React from 'react';
import './Person.css';
const person = (props) => {
    return (
        <div className="Person">

            {/** changes name to a predefined value on clicking on the heading below*/}
            <h6 onClick={props.click0}>I am {props.name}</h6>

            {/* create 2 way binding 
            1. one way by binding the firing event handler which update the state attribute of my_name 
            2. second way by binding state attribute my_name as value of input field*/}
            
            <input type='text' onChange={props.twoway} value={props.name}/>
        </div>
    );
}

export default person;