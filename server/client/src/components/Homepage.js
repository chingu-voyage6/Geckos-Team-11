import React, { Component } from 'react';
import '../App.css';

import '../Navbar.css'

import Nav from '../partials/Nav';
class Homepage extends Component {
  render() {
    return (
      <div className="App">
		 <body>
     <Nav />
			<div className="testContainer">
				<div className="practiceTest">
					<div className="topBar">
						<div className="bartop"></div>
						<div className="blurbar"></div>
					</div>
					<div className="testComments">
						<h1>Practice Test</h1>
						<p>+20 Reputation</p>
						<div className="btn-wrapper">
							<a href="/practice">
								<button>Start</button>
							</a>
							<div className="buttonshadow"></div>
						</div>
					</div>
				</div>
			</div>
		</body>
      </div>
    );
  }
}
  // class Box extends Component{
  // 	render() {
  // 		return (
  // 		<div className="DropInOut dropDown">
  // 		<a href="/profile">Profile</a>
  //   	<a href="/logout">Logout</a>
  //   	</div>
  //   	);
  // 	}
  // }
export default Homepage;
