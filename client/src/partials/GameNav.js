import React, { Component } from 'react';
import '../Navbar.css';
import '../GameNav.css';

  class Time extends Component{
		constructor(){
			super();
			this.state = {
				timer: 160
			}
		}
		convertToTime(){
			let time = (this.state.timer)
			let minutes = ~~((time % 3600) / 60);
			let secs = time % 60;
			return `${minutes}:${secs}`;
		}
		timePerSecond(){
			let time = (this.state.timer);
			if(time < 0){
				clearInterval(this.timePerSecondInterval);
				return false;
			}
			else{
				time--;
				this.setState({
					timer: time
				})
			}			
		}
		timeRunner(){
			this.timePerSecondInterval = window.setInterval(this.timePerSecond, 1000);
		}
		componentDidMount(){
			this.timeoutID = window.setTimeout(this.timePerSecond, 2000);
		}
    render(){
      return (
      <div className='timeClock'>
      	<p>{this.convertToTime()}</p>
      	<span className='blurP'></span>
    	</div>
  		);
    }
  }

class GameNav extends Component{
		constructor(props){
		super( props )
		this.state = {show: false};

		this.dropDown = this.dropDown.bind(this)

	}

	dropDown = () => {
		const { show } = this.state;
		this.setState( { show: !show } )
	}
	
  render(){
    return(
  <header>	
      		<a className="linkNav" href="/">
      		<div className="navLogo">
      			<p>
      				<span>T</span>
      				YPE.
      			</p>
      		</div>
      		</a>
          <Time />
    	<div className="menu">
    	<div className="menuPic"onClick={ this.dropDown }>
    	<img alt="Profilepic" src="https://images.unsplash.com/photo-1498354136128-58f790194fa7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8d66d0f68c7412e69612414926dbbe97&auto=format&fit=crop&w=1350&q=80"/>
    	</div>
    	<br />
    { this.state.show && <Box /> }
    	</div>
    </header>
    )
  }
}


  class Box extends Component{
  	render() {
  		return (
  		<div className="DropInOut dropDown">
  		<a href="/profile">Profile</a>
    	<a href="/">Logout</a>
    	</div>
    	);
  	}
  }
export default GameNav;