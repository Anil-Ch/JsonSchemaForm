import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import JsonForm1 from './Container/JsonForm1'
import JsonForm2 from './Container/JsonForm2'
import JsonForm3 from './Container/JsonFrom3'
import JsonForm4 from './Container/JsonForm4'
import JsonForm5 from './Container/JsonForm5'



class App extends Component {
  render() {
    return (
      <div className="App">
        <JsonForm5 />
      </div>
    );
  }
}

export default App;
