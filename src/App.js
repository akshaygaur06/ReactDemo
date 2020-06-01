import React from 'react';
import './App.css';
import RouterComponent from './Router'
import Menu from './Component/Menu'
function App() {

  let button;
  if(window.location.pathname.toLowerCase() !== '/login'){ 
    button= <Menu />
  }
  return (
    <div className="App">

 {button}
    <RouterComponent/>
    </div>
  );
}

export default App;
