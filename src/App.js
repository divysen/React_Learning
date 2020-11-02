import React, { Component } from 'react';
import './App.css';
import Pr from './Person/Person';

class App extends Component {

  state = {
    pets: [
      { name: 'DOG'},
      { name: 'CAT'}
    ],
    my_name : 'Divy',
    visibility : false
  }

  // this handler toggles the name of pets 
  switchName_Handler = () => {
    if(this.state.pets[0].name.includes('DOG')){
      this.setState({
        pets: [
          { name: 'CAT'},
          { name: 'DOG'}
        ]
      });
    }
    else{
      this.setState({
        pets: [
          { name: 'DOG'},
          { name: 'CAT'}
        ]
      });
    }
  }

  // this name handler changes the my_name attribute of state with provided one
  changeName_Handler = name => {
    this.setState({
      my_name : name
    })
  }

  // two way binding handler which update the state attribute my_name with the value provided in input element 
  twoWay_Binding = event => {
    this.setState({
      my_name: event.target.value
    })
  }

  // visibility handler which toggles the visibility of state attribute visibility
  visibility_handler = () => {
    this.state.visibility === true ?
    this.setState({ visibility: false }):
    this.setState({ visibility: true })
  }

  render() {

    const Style1 = {
      backgroundColor: 'white',
      font: 'inherit',
      border : '1x solid blue',
      padding: '8px',
      cursor: 'pointer',
      margin: '50px 10px 10px 10px'
    }
    return (
      <div className='App'>

        {/* providing show/hide button which toggles the visibility attribute of component state */}

        <button style={Style1} onClick={this.visibility_handler}>
          {this.state.visibility ? 
          <i>Hide</i>:
          <i>Show</i>}
        </button>
        <br></br>


        {/* conditionly show/ hide this div depending upon the visibility attribute of state */}


        {this.state.visibility ?
          <div>
            {/* toggle name of pets former to later & later to former */}
            <button style={Style1} onClick={this.switchName_Handler}>Click Here To Change</button>
            <h1 >Hi I love {this.state.pets[0].name} & {this.state.pets[1].name}</h1>

            {/* pass change_name event handler with arguments, pass to Pr component & bind with current object*/}
            <Pr name={this.state.my_name} click0={this.changeName_Handler.bind(this, 'Manu')} twoway={this.twoWay_Binding.bind(this)}></Pr>
            <Pr name={this.state.my_name} click0={this.changeName_Handler.bind(this, 'Divy')} twoway={this.twoWay_Binding.bind(this)}></Pr>
          </div>
         :
          null
        }
        
      </div>  
    );
  }
}

export default App;
