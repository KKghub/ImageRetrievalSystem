import React from 'react';
import ImageResultsPage from './ImageResultsComponent';
import ImageResultsComponent from './ImageResultsComponent';

function ImageUpload() {
  return (
    <div>
        <form action="http://localhost:5000/queryImage" method="POST" encType="multipart/form-data">

          <div>
            <label>Select image</label>
            <br/>
            <br/>
            <div>
              <input type="file" name="image" id="image"></input>
            </div>
          </div>

          <br/>
          <br/>
          
          <button type="submit">Upload</button>

        </form>

        <ImageResultsComponent>

        </ImageResultsComponent>
    </div>
  );
}

export default ImageUpload;
