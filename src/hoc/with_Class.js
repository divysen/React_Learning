import React from 'react';

/** this is to define a higher order component in which we pass current component as 
 * an argument & some specific prorperty (cssClass in current context)
 * 
 */
const with_class = (WrappedComponent, cssClass) => {
    return props => {
        return (
                <div className={cssClass}>
                    {/** here use spread operator to copy & spread the props coming from parent
                     * component to this wrappedcomponent below, best use of spread operator
                     */}
                    <WrappedComponent {...props}></WrappedComponent>
                </div>
                );
    }
}

export default with_class;