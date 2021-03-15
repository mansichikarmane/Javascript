import React from "react";
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="app">
      {/* <h1>Youtube Clone</h1> */}

      <Header />
      
      <div>
        <Sidebar/>
      </div>
      {/* {sidebar} */}
      {/* {recommended videos} */}
    </div>
  );
}

export default App;
