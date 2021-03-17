import React from "react";
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import RecommendedVideos from './RecommendedVideos';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
      <Header/>
        <Switch>
          <Route path="/search">
            
            <h1>Search Page🔍</h1>
          </Route>

          <Route path="/">
            <div className="app__page">
              <Sidebar/>
              <RecommendedVideos class="rec__videos"/>
            </div>
          </Route>
        </Switch>

      </Router>

      {/* <Header />
      <div className="app__page">
        <Sidebar/>
        <RecommendedVideos class="rec__videos"/>
      </div> */}

    </div>
  );
}

export default App;
