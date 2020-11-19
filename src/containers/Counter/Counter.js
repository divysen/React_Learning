import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as ActionType from '../../store/actions/main';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {

    render () {
        return (
            <div>
                <CounterOutput value={this.props.counter} />
                <CounterControl label='Increment' clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAdditing5Counter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubstracting5Counter}  />
                <hr/>
                <button onClick={() => this.props.onResult(this.props.counter)}>Store Result</button>
                <ul>{this.props.storedResult.map(element => (
                    <li key={element.id} onClick={() => this.props.onDeleteResult(element.id)}>{element.val}</li>
                ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return{
        counter: state.ctr.counter,
        storedResult: state.rst.results
    };
};

const mapDispatchToProps = dispatch => {
    return{
        onIncrementCounter: () => dispatch(ActionType.increment()),
        onDecrementCounter: () => dispatch(ActionType.decrement()),
        onAdditing5Counter: () => dispatch(ActionType.add()),
        onSubstracting5Counter: () => dispatch(ActionType.substract()),
        onResult: result => dispatch(ActionType.addResult(result)),
        onDeleteResult: ID => dispatch(ActionType.deleteResult(ID))
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Counter);