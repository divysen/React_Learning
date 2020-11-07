import React, {useEffect} from 'react';
import WithClass from '../../hoc/WithClass';
import StyleClass from './Student.css';
import propTypes from 'prop-types';


const student = props => {

    // const authContext = useContext(AuthContext);

    //useEffect() will fire only if visibility of state of app.js will change
    useEffect(() => {
        console.log(`[Student.js] useEffect()`);
        return () => {
            console.log(`[Student.js] cleanup useEffect()`);
        }
    },[props.name]);
    
    // applying css class as member of StyleClass 
    return (
        /** removing root level element & parsing adjacent elements in form of , seperated array of element */
            <WithClass classes={StyleClass.student}>
            {/** Aux component is only blank wrapper component which eliminates the use of <div> as 
             * a root level wrapper element for given component.
             */}
            {/* <Aux >  */}
                <pre key='i1' onClick={props.click}>
                    Name: {props.name}, CGPA: {props.cgpa}
                </pre>
                <input key='i2' onChange={props.twowaybind} value={props.name}></input>
            {/* //</Aux> */}
            </WithClass>
    );
}
// as Students is completely dependent upon Lists, there is no sense to optimize this component
// so commenting out 
// export default React.memo(student);
student.propTypes = {
    click: propTypes.func,
    twowaybind: propTypes.func,
    name: propTypes.string,
    cgpa: propTypes.number
};

export default student;