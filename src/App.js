
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import React, {useState} from 'react'
import Textform from './components/Textform';
// import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  // Link
} from "react-router-dom";

function App() {
  const [Mode, setMode] = useState('light')
  // const [alert, setalert] = useState(null)

  // const showalert = (message,type)=>{
  //   setalert({
  //     msg : message,
  //     type : type
  //   })
  // }

  const toggleMode = ()=>{
    if (Mode==='primary'){
      setMode('dark')
      document.body.style.background ='black'
      // showalert('dark mode enabled', 'success')
    }

    else{
      setMode('primary')
      document.body.style.background ='#7cbcfb'
      // showalert('light mode enabled', 'success')
    };
  }
  return (
    <>
<Router>
  <Navbar title='Textutils' Home="Home" About="About" Mode={Mode} tm={toggleMode}/>
  {/* <Alert alert={alert} type={alert}/> */}
  <div className='container my-3'>
   <Routes>
      <Route path="/about" element={<About />}>
      </Route>
      <Route path="/textform" element={<Textform heading="Enter a text" Mode={Mode} />}>
      </Route>
   </Routes>
  {/* <Textform heading="Enter a text" Mode={Mode}/> */}
  {/* </div> */}
  {/* <div className="container my-3"> */}
    {/* <About/> */}
  </div>
  </Router>
  </>
  );
}

export default App;
