// import React from 'react';

// this is a Higher Order Component(HOC), which is only a wrapper to hold adjacent child element together
// without the need to provide a root level <div> or any other element.
const aux = props => props.children;

export default aux;