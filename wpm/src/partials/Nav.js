import React, { Component } from 'react';
import './Navbar.css';

class Nav extends Component{
  render(){
    return(
    <header>	
      		<a className="linkNav" href="/">
      		<div className="navLogo">
      			<p>
      				<span>T</span>
      				"YPE."
      			</p>
      		</div>
      		</a>
    	<div className="menu">
    	<div className="menuPic"></div>
    	</div>
    </header>
    )
  }
}
export default Nav;