import React, { useEffect, useRef, Fragment, useContext } from 'react';
import StyleClass from '../../containers/App.css';
import propTypes from 'prop-types';
import AuthContext from '../../context/authContext';

const heading = props => {

    let headClass = [StyleClass.blue, StyleClass.bold];
    let btnClass = null;

    const authContext = useContext(AuthContext);

    // using useRef hook & bind it to toggle button & automatically click after 2 seconds of 
    // componentDidMount() cycle equivalent
    const btnRef = useRef(null);
    if(props.isvisible){
        btnClass = StyleClass.red;
    }
    else{}

    useEffect(()=>{
        console.log(`[Heading.js] useEffect()`);
        setTimeout(() => btnRef.current.click(), 2000);
        return () => {
            console.log(`[Headin.js useEffect() cleanup]`);
        };
    },[]);

    return (
        /** using fragment to prevent using <div> to wrap these elements */

        <Fragment>
            <h3 className={headClass.join(' ')}>In a React Root (App) Component</h3>
            {/* providing show/hide button which toggles the visibility attribute of component state */}

            <button ref={btnRef} className={btnClass} onClick={props.changevisibility}>
            {props.isvisible ? 
            'Hide':
            'Show'}
            </button>
            <button onClick={ authContext.con_login }>{
                authContext.con_authenticated ?
                'Log Out' :
                'Log In'
            }</button>
            <br></br>
        </Fragment>
    )
};

heading.propTypes = {
    isvisible: propTypes.bool,
    changevisibility: propTypes.func
};

export default React.memo(heading);