import React,{ Component } from "react";

/**this is a higher order component used for lazy loading of the components files, whenever they are needed
 * during execution in browser (i.e. runtime), it takes a function ( import() ) which takes the component 
 * as argument.
 */
const asyncComponent = (importComponent) => {

    /**returns an unnamed class */
    return class extends Component{
        
        state = {
            component: null
        };

        /**change state property component to default export of provided component */
        componentDidMount(){
            
            /**here import() will be of type promise for lazy loading,
             * and on fullfilment of promise we setState:  component: cpm.default.
             */
            importComponent().then( cmp => this.setState({ component: cmp.default }));
        };

        render(){
            /**load component */
            const C = this.state.component;
            /**if component is set return it as component with spreading all props, else return null */
            return (C ? <C {...this.props} /> : null);
        };
    };
};

export default asyncComponent;