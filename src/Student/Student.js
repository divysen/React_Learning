import React from 'react';

const student = props => {
    return (
        
            <div>
                <pre onClick={props.click}>
                    Name: {props.name}, CGPA: {props.cgpa}
                </pre>
                <input onChange={props.twowaybind} value={props.name}></input>
            </div>
           
    );
}

export default student;