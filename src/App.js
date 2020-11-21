import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Blog from './containers/Blog/Blog';

class App extends Component {
  render() {
    return (
      /** if our app is being served on server side url 'webiwork.com/react-learning',
       * provide that '/react-learning' uri part in basename. 
       */
      // <BrowserRouter basename='/react-learning'>
      <BrowserRouter>
        <div className="App">
          <Blog />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;