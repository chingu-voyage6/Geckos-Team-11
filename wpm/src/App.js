import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'; 
import Landingpage from './components/Landingpage';
import Homepage from './components/Homepage';
import './App.css';

const App = () => (
  <Router>
      <div>
        <switch>
          <Route exact path="/" component={Landingpage} />
          <Route exact path='/homepage' component={Homepage}/>
        </switch>
      </div>
  </Router> 
)

export default App;
