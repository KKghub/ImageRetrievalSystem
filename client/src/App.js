import React from 'react';
// import logo, { ReactComponent } from './logo.svg';
import './App.css';
// import ImageResultsComponent from './ImageResultsComponent';
import axios from 'axios';
// import ImageUpload from './ImageUploadComponent';
import ReactContainer from './ReactContainer'
function App() {

  function uploadAction() {

    var imagedata = document.querySelector('input[type="file"]').files[0];

    axios.post("http://localhost:5000/queryImage", imagedata, {headers:{'Content-Type': 'multipart/form-data'}}).then(
      (resp) => {
        axios.get("http://localhost:5001/getResults").then(
          (response) => {}
        );
      }
    );
    //   axios.get("http://localhost:5000/getResults").then(
    //       (resp) => {
    //           console.log(resp.data);
    //           this.setState({
    //               imageList: resp.data
    //           });
    //       }
    //   );
  }
  return (
    <ReactContainer/>
  );
}

export default App;
