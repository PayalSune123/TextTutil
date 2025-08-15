import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar'
import TextForm from './Components/TextForm'
import About from './Components/About';
import { useState } from 'react';
import Alert from './Components/Alert';
import { HashRouter  as Router,Routes,Route,Link } from 'react-router-dom';


function App() {
  const[alert,setAlert]=useState(null);
  const showAlert = (message, type) => {
  setAlert({
    msg: message,
    type: type
  });
  setTimeout(() => {
    setAlert(null);
  }, 1500);
};

  const[mode,setMode]=useState('light');
  const toggleMode=()=>{
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor='#05336f';
      showAlert("dark mode has been enabled","success")
      document.title="TextTutil-dark Mode"
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white';
      showAlert("light mode has been enabled","success")
      document.title="TextTutil-light Mode"
    }
  }
  return (
    <>
   <Router>
      <Navbar title="textutils2" mode={mode} abouttext="About"  toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text" mode={mode} />} />
        </Routes>
      </div>
    </Router>

    </>
  );
}

export default App;
