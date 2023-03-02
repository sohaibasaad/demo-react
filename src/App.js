import React, { useState } from 'react'
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("lightTheme");
  const [alert, setAlert] = useState(null);
  const [textModeBtn, setModeTextBtn] = useState("Enable Dark Mode");

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  const toggleMode = () => {
    if (mode === "lightTheme") {
      setMode("darkTheme");
      setModeTextBtn("Enable Light Mode");
      showAlert("Dark mode enabled", "success");
      document.title = "Demo App - Dark Mode";
    }

    else {
      setMode("lightTheme");
      setModeTextBtn("Enable Dark Mode");
      showAlert("Light mode enabled", "success");
      document.title = "Demo App - Light Mode";
    }
  }
  return (
    <Router>
      <Navbar title="Demo App" aboutText="About Us" mode={mode} toggleMode={toggleMode} toggleModeButton={textModeBtn} />
      <Alert alert={alert} mode={mode} toggleMode={toggleMode} toggleModeButton={textModeBtn} />
      <Routes>
        <Route exact path="/" element={<TextForm heading="Enter the text to transform" showAlert={showAlert} mode={mode} toggleMode={toggleMode} toggleModeButton={textModeBtn} />} />
        <Route exact path="/about" element={<About showAlert={showAlert} mode={mode} toggleMode={toggleMode} toggleModeButton={textModeBtn} />} />
      </Routes>
    </Router>

  );
}

export default App;
