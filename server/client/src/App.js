import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'; 

import Landingpage from './components/Landingpage';
import Homepage from './components/Homepage';
import Practice from './components/Practice';
import Profile from './components/Profile';

import './App.css';

const checkAuth = () =>{
  let token = localStorage.getItem('token');
  if(token){
    return true; 
  }else {
    return false;
  }
}

const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route
		{...rest}
		render={props =>
			checkAuth() ? (
				<Component {...props} />
			) : (
					<Redirect
						to={{
								pathname: "/",
								state: { from: props.location }
						}}
					/>
				)
			}
	/>
);
const App = () => (
  <Router>
   <div>
    <switch>
     <Route exact path="/" component={Landingpage} />
     <PrivateRoute exact path='/board' component={Homepage}/>
     <PrivateRoute exact path='/practice' component={Practice}/>
     <PrivateRoute exact path='/profile' component={Profile}/>
    </switch>
   </div>
  </Router> 
)

export default App;
