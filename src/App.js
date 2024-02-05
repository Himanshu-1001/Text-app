import Navbar from './components/Navbar';
import Textform from './components/Textform';
import './App.css';
import About from './components/About';
import {useState} from 'react';
import Alert from './components/Alert';

function App() {

  const toggleMode= (cls)=>{
    if(mode==="light"){
      setMode("dark");
      // setBtnText("light");
      document.body.style.backgroundColor='#1c1c34';
      showAlert("Dark Mode Enabled","success");

    }

    else{
      setMode("light");
      // setBtnText("dark");
      document.body.style.backgroundColor='white';
      showAlert("Light Mode Enabled", "success");
    }
  }

  const showAlert= (message, type)=>{
    setAlert({
      msg:message,
      type:type
    })

    setTimeout(()=>{
      setAlert(null);
    },1200);
  }
  

  const[mode, setMode]=useState("light");
  const[alert, setAlert]=useState(null);

  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <Textform heading="Enter the text to analyse" mode={mode} showAlert={showAlert}/>
      </div>
    </>
  );
}

export default App;
