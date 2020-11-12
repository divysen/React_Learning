import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as ActionType from '../../store/action';
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
        counter: state.counter.counter,
        storedResult: state.results.results
    };
};

const mapDispatchToProps = dispatch => {
    return{
        onIncrementCounter: () => dispatch({ type: ActionType.INCREMENT }),
        onDecrementCounter: () => dispatch({ type: ActionType.DECREMENT }),
        onAdditing5Counter: () => dispatch({ type: ActionType.ADD, value: 5 }),
        onSubstracting5Counter: () => dispatch({ type: ActionType.SUBSTRACT, value: 5 }),
        onResult: result => dispatch({ type: ActionType.RESULT, result: result }),
        onDeleteResult: ID => dispatch({ type: ActionType.DELETE_RESULT, id: ID }),
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Counter);