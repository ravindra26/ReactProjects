import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react';
import FileInput from './Components/FileInput/FileInput';
import Header from './Components/Header/Header';

class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <FileInput></FileInput>
      </div>);
  }
}


export default App;
