import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'; 

import Landingpage from './components/Landingpage';
import Homepage from './components/Homepage';
import Practice from './components/Practice';
import Profile from './components/Profile';

import './App.css';

const App = () => (
  <Router>
   <div>
    <switch>
     <Route exact path="/" component={Landingpage} />
     <Route exact path='/board' component={Homepage}/>
     <Route exact path='/practice' component={Practice}/>
     <Route exact path='/profile' component={Profile}/>
    </switch>
   </div>
  </Router> 
)

export default App;
