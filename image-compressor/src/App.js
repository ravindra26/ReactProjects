import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react';
import FileInput from './Components/FileInput/FileInput';
import Header from './Components/Header/Header';
import ImageContainer from './Components/ImageContainer/ImageContainer';
import DoubleImageContainer from './Components/ImageContainer/DoubleImageContainer';
import axios from 'axios';


class App extends Component {

  componentDidUpdate() {
    if (this.state.showProgress) {
      this.sendRequest();
    }
  }


  state = {
    originalImage: null,
    compressedImage: null,
    showCompressedImage: false,
    imageExtension: '',
    compressionValue: 50,
    showProgress: false,
    originalImageFile: null,
    originalImageFileName: null
  };


  sendRequest = () => {
    let username = "ravindra";
    let password = "admin";
    const usernamePasswordBuffer = Buffer.from(username + ':' + password);
    const base64data = usernamePasswordBuffer.toString('base64');
    const axiosObject = axios.create({
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Basic ${base64data}`
      }
    });


    const formData = new FormData();
    formData.append("file", this.state.originalImageFile);
    formData.append("name", this.state.originalImageFileName);
    formData.append("imageExtension", this.state.imageExtension);
    formData.append("compressionFactor", ((100 - this.state.compressionValue) / 100) + "f");
    axios({
      method: 'post',
      url: 'http://localhost:8080/Service1/uploadFile',
      data: formData,
      headers: { 'Content-Type': 'multipart/form-data' }
    })
      .then(response =>{
        //handle success
        this.setState({
          compressedImage:'data:image/'+this.state.imageExtension+';base64,'+response.data,
          showCompressedImage:true,
          showProgress:false
        });
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
  }

  onCompressClick = () => {
    this.setState({
      compressedImage: null,
      showProgress: true
    });
  }

  fileChange = (event) => {
    let currState = this.state;
    currState.originalImage = event.target.files[0];
    let files = event.target.files;
    let reader = new FileReader();
    let name = files[0].name;
    if (typeof name != 'undefined') {
      let names = name.split(".");
      var src = null;
      reader.readAsDataURL(files[0]);


      reader.onload = e => {
        src = e.target.result;
        this.setState({
          showCompressedImage: false,
          originalImage: src,
          compressedImage: "",
          imageExtension: names[1],
          imageExtension: files[0].type.replace("image/", ""),
          originalImageFile: files[0],
          originalImageFileName: files[0].name
        });
      };
    }
  }

  increaseCompressionValue = () => {
    let value = this.state.compressionValue;
    if (value === 100) {
      alert("Maximum Compression Reached");
    } else {
      this.setState({
        compressionValue: this.state.compressionValue + 10
      });
    }
  }

  decreaseCompressionValue = () => {
    let value = this.state.compressionValue;
    if (value === 10) {
      alert("Minimum Compression Reached");
    } else {
      this.setState({
        compressionValue: this.state.compressionValue - 10
      });
    }
  }

  /**
   * Render function 
   */
  render() {
    return (
      <div>
        <Header
          showProgress={this.state.showProgress}
          sendRequest={this.sendRequest}
        ></Header>
        <FileInput
          fileChange={this.fileChange}
        ></FileInput>
        {this.state.showCompressedImage ? <DoubleImageContainer
          originalImage={this.state.originalImage}
          compressedImage={this.state.compressedImage}
          click={this.onCompressClick}
          incComp={this.increaseCompressionValue}
          decComp={this.decreaseCompressionValue}
          value={this.state.compressionValue}
        ></DoubleImageContainer> :
          <ImageContainer
            click={this.onCompressClick}
            incComp={this.increaseCompressionValue}
            decComp={this.decreaseCompressionValue}
            value={this.state.compressionValue}
            image={this.state.originalImage}
          ></ImageContainer>}
      </div>);
  }
}


export default App;
