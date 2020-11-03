import React from 'react';
import StyleClass from './Student.css';

const student = props => {

    // applying css class as member of StyleClass 
    return (
            <div className={StyleClass.student}>
                <pre onClick={props.click}>
                    Name: {props.name}, CGPA: {props.cgpa}
                </pre>
                <input onChange={props.twowaybind} value={props.name}></input>
            </div>
    );
}

export default student;