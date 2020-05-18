import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import UserGreeting from './components/UserGreeting'
class App extends Component {
  render(){
  return (
    <div className="App">
      <UserGreeting></UserGreeting>
    </div>
  );
}
}
export default App;
