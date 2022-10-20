
import './App.css';
import { useState } from 'react';
import { uploadAudio } from './api';

function App() {

  const onLoad = (res) => {

    console.log("in Onload")
    console.log("response -> ", res)
  }
  
  var getBase64 = (file) => {

    return new Promise(resolve => {

      let fileInfo;
      let baseURL = "";
      // Make new FileReader
      let reader = new FileReader();
      
      // Convert the file to base64 text
      reader.readAsDataURL(file);
      
      // on reader load somthing...
      reader.onload = () => {
        // Make a fileInfo Object
        console.log("Called", reader);
        baseURL = reader.result;
        // console.log(baseURL);
        resolve(baseURL);
      };
      console.log(fileInfo);
      
    });
  };
  const [file, setFile] = useState();
  const [base64URL, setBase64URL] = useState();
  
  var handleFileInputChange = e => {
    console.log(e.target.files[0]);

    
    setFile(e.target.files[0]);

    getBase64(file)
      .then(result => {
        // console.log(result)
       
        setBase64URL(result)
      })  
      .catch(err => {
        console.log(err);
      });

    setFile(e.target.files[0])
  };


  const onClick = () => {
    uploadAudio({
      "audio": base64URL
    }, onLoad)
  }



  return (
    <div className="App">
      <main>
      <div>
        <input type="file" name="file" onChange={handleFileInputChange} />

        <button onClick={onClick}>Submit</button>
      </div>
      </main>
    </div>
  );
}

export default App;
