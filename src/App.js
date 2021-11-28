import React, { Component } from 'react';
import { BrowserRouter as Router, Routes} from 'react-router-dom';
import './App.css';

//Components
//import xxxx from '-/component/xxxx';

function Despachos(){
  return(
    <div id="despachos">Banner</div> 
  )  
}

class App extends Component{
  render(){
    return <div>
      <div>This is our AppCiclo4: <Despachos/>
      </div>
    <Router>
      <Routes exact path="/"  render ={()=>{
        return
        //Componentes          
        }}>
      </Routes>
    </Router>
    </div>
  }
}

export default App;
