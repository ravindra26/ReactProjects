import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react';
import FileInput from './Components/FileInput/FileInput';
import Header from './Components/Header/Header';
import ImageContainer from './Components/ImageContainer/ImageContainer';
import DoubleImageContainer from './Components/ImageContainer/DoubleImageContainer';


class App extends Component {

  state = {
    originalImage: null,
    compressedImage: null,
    showCompressedImage: false
  };

  onCompressClick = () => {
    console.log("DO Compression");
    this.setState({
      showCompressedImage:true
    });
  }

  fileChange = (event) => {
    let currState = this.state;
    currState.originalImage = event.target.files[0];
    this.setState({
      showCompressedImage:false
    });
  }

  render() {
    return (
      <div>
        <Header></Header>
        <FileInput
          fileChange={this.fileChange}
        ></FileInput>
        {this.state.showCompressedImage?<DoubleImageContainer></DoubleImageContainer>: <ImageContainer
        click = {this.onCompressClick}
        ></ImageContainer>}
      </div>);
  }
}


export default App;
