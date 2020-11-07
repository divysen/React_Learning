import React, { Component } from 'react';
import StyleClass from './App.css';
import Lists from '../containers/Lists/Lists';
import Heading from '../components/Heading/Heading';
import with_Class from '../hoc/with_Class';
import AuthContext from '../context/authContext';

class App extends Component {

  //calling constructor
  constructor(props){
    // always call super(props) in constructor
    super(props);
    console.log(`[App.js] constructor()`);
    // behind the scene react automatically initializes state inside a constructor but it 
    // could be a best practice
    this.state = {
      visibility : false,
      auth : false
    } 
  }

  /* this is a static method to get modified state using props (it is rare but yet very powerful)
      it takes first argument props & second argument state 
      this method must return derived state*/
  static getDerivedStateFromProps(props, state){
    console.log(`[App.js] getDerivedStateFromProps()`,props);
    return state;
  }
  

  // this lifecycle method shoud return true =>  to continue, false => to stop
  shouldComponentUpdate(nextProps, nextState){
    console.log(`[App.js] shouldComponentUpdate()`);
    //return true;

    // as the only member of state of this component is not chaning, so prevent this 
    // component to update when child component updates
    if(nextState.visibility !== this.state.visibility ||
      nextState.auth !== this.state.auth){
      return true;
    }else{
      return false;
    }
}

// always return some value which wil be passed & used in componentDidUpdate()
getSnapshotBeforeUpdate(prevProps, nextProps){
    console.log(`[App.js] getSnapshotBeforeUpdate()`);
    return null;
}

componentDidUpdate(){
    console.log(`[App.js] componentDidUpdate()`);
}


/* this is the place where all lazy loading & date fetching should be done,
  but don't change state here synchronously*/
  componentDidMount(){
    console.log('[App.js] componentDidMount()');
  }


  
//  visibility handler which toggles the visibility of state attribute visibility
  visibility_handler = () => {
    this.state.visibility === true ?
    this.setState({ visibility: false }):
    this.setState({ visibility: true })
  }

  login_handler = () => {
    this.state.auth === true ?
    this.setState({ auth: false }):
    this.setState({ auth: true })
  }

  render() {

    console.log(`[App.js] render()`);
    return (
      <AuthContext.Provider value={{
        con_authenticated: this.state.auth,
        con_login: this.login_handler
      }}>
      <React.Fragment>
      {/* <div className={}> */}
        <Heading isvisible={this.state.visibility} changevisibility={this.visibility_handler}></Heading>
        <Lists isvisible={this.state.visibility}></Lists>
      {/* </div>   */}
      </React.Fragment>
      </AuthContext.Provider>
    );
  }
}
// using HOC wrapper for using div with css-classes

export default with_Class(App, StyleClass.App);
