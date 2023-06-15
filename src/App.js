// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';


function App() {
  const [mode, setMode] = useState('light'); //whether dark mode is enabled or not.
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type

    })

    setTimeout(() => {
      setalert(null)

    }, 1500);

  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = "#042743"
      showAlert("Dark mode has been enabled", "success")
      document.title = "TextUtils -Dark Mode"


    }
    else {
      setMode('light')
      document.body.style.backgroundColor = "white"
      showAlert("Light mode has been enabled", "success")
      document.title = "TextUtils -Light Mode"
    }
  }


  return (

    <>




      {/* <Navbar title="TextUtils" /> if we not use the props value than it will auto print the values which are avaible on default props  */}

    

      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}></Alert>


      {/* probs */}


      <div className="container my-3">
      
          <TextForm showAlert={showAlert} heading="Enter the Text to Anaylze below" mode={mode} />
        <About />
        
        


        



      </div>
    


    </>
  );
}

export default App;
