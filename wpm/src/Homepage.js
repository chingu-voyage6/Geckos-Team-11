import React, { Component } from 'react';
import './Hpage.css';

class Homepage extends Component {
  render() {
    return (
      <div className="App">
		 <body>
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
							<a href="#">
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
  
export default Homepage;
