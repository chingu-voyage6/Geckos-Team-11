import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'; 
import Home from './components/Home';
import './App.css';

const App = () => (
  <Router>
      <div>
        <switch>
          <Route exact path="/" component={Home} />
        </switch>
      </div>
  </Router> 
)

export default App;
