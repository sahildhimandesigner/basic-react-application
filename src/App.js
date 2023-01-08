import React, { useState } from "react";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
      setAlert({
        msg: message,
        type: type
     })
     setTimeout(() => {
        setAlert(null)
     }, 3000)
  }

  const toggleMode = () => {
    if(mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#212529';
      document.body.style.color = '#FFFFFF';
      showAlert('Dark mode has been enable', 'success');
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = '#FFFFFF';
      document.body.style.color = '#000000';
      showAlert('Light mode has been enable', 'success');
    }
  }

  return (
    <div className="App">
      <Router>
        <Navbar title="TextUtils 2" aboutText="About text" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
        <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to Analyze" />} />          
        </Routes>    
        </div>  
      </Router>
    </div>
  );
}

export default App;
