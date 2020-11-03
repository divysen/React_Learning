import React, {Component} from 'react';

class ErrorBoundary extends Component {
    state = {
        hasError: false,
        errorMessage: ''
    }

    catchError = (error, info) => {
        this.setState({
            hasError: true,
            errorMessage: error
        });
    }

    render(){
        if(this.state.hasError){
            return(
                <h4>{this.state.errorMessage}</h4>
            )
        }
        else{
            return (this.props.children)
        }
    }
}

export default ErrorBoundary;