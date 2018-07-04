import React, { Component } from 'react';

import Progressbar from '../partials/Progressbar';
import typewriter from '../assets/typewriter.jpeg';

  class Profile extends Component{
    render(){
      return(
        <main id='profile-main'>
          <div id='user'>
            <img id='profile-pic' src={typewriter} width='200px' height='200px' alt='user' />
            <h3>User Name</h3>
            <p>Server Name</p>
          </div>
          <div id='user-score'>           
            <h3>WPM</h3>
            <div id='user-wpm-results'>
              <div  className='user-result' id='wpm-avg'>
                <h4>Avg</h4>
                <p>00</p>
                <span>wpm</span>
              </div>
              <div className='user-result' id='wpm-best'>
                <h4>Best</h4>
                <p>00</p>
                <span>wpm</span>
              </div>
            </div>
            <h3>RECENT</h3>  
            <div id='recent-progress'>
              <Progressbar />      
            </div>                     
          </div>
        </main>
      )
    }
  }
export default Profile;