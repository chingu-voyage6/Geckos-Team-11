import React, { Component } from 'react';
import GameNav from '../partials/GameNav';

class Practice extends Component{
  render(){
    return(
    	<main>
      		<GameNav />
      		<div className='practiceWrapper'>
      			<div className='bigSpace'></div>
      			<div className='playerConnect'>
      				<div className='playerMeter'>
      					<div className='allSinglePlayerMod'>
      						<div className='statusBar'>
      							<div className='playerInfo'>
      								<p>
      									<b>0</b>
      									<span>wpm</span>
      								</p>
      								<p></p>
      							</div>
      						</div>	
      						<div className='singlePlayerMod'>
      							<div className='singleModProfile'>
      								<div className='modLineWrapper'>
      									<div className='modLine'></div>
      									<div className='modLineBlur'></div>
      								</div>
      								<div className='modPic'>
      									<img alt='pictures' src='https://images.unsplash.com/photo-1498354136128-58f790194fa7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8d66d0f68c7412e69612414926dbbe97&auto=format&fit=crop&w=1350&q=80' />
      								</div>
      							</div>
      							<div className='allInfoAboutSingleMod'></div>
      						</div>
      						<div className='playerUserName'>
      							<p>Server Name</p>
      						</div>	
      					</div>
      				</div>
      				<div className='typeContainer'>
      					<div className='typeWrapper'>
      					</div>
      					<div className='inputWrapper'>
      						<input type='text' id='inputEl' placeholder='Type Here' />
      					</div>
      				</div>
      			</div>		
				<div className='bigSpace'></div>
			</div>
		</main>

    )
  }
}
export default Practice;