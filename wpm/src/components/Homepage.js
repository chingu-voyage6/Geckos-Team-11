import React, { Component } from 'react';
import '../App.css';
import Nav from './partials/Nav.js';

class Homepage extends Component {

	constructor(props){
		super( props )
		this.state = {show: false};

		this.dropDown = this.dropDown.bind(this)

	}

	dropDown = () => {
		const { show } = this.state;
		this.setState( { show: !show } )
	}
  render() {
    return (
      <div className="App">
		 <body>
		     <header>	
      		<a className="linkNav" href="/">
      		<div className="navLogo">
      			<p>
      				<span>T</span>
      				YPE.
      			</p>
      		</div>
      		</a>
    	<div className="menu">
    	<div className="menuPic"onClick={ this.dropDown }>
    	<img src="https://images.unsplash.com/photo-1498354136128-58f790194fa7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8d66d0f68c7412e69612414926dbbe97&auto=format&fit=crop&w=1350&q=80"/>
    	</div>
    	<br />
    { this.state.show && <Box /> }
    	</div>
    </header>
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
							<a href="http://www.google.com">
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
  class Box extends Component{
  	render() {
  		return (
  		<div className="DropInOut dropDown">
  		<a href="/profile">Profile</a>
    	<a href="/logout">Logout</a>
    	</div>
    	);
  	}
  }
export default Homepage;
