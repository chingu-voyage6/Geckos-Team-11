import React, { Component } from 'react';

import Testbar from '../partials/Testbar';
import Progressbar from '../partials/Progressbar';
import typewriter from '../assets/typewriter.jpeg';
import Nav from '../partials/Nav';

  class Profile extends Component{
    render(){
      return(
        <div className="profileContainer">
        <main id='profile-main'>
          <div className='profileUser_left'>
            <img id='profile-pic' src={typewriter} alt='user' />
            <div className="profileBadge">
              <svg className='svg-icon' viewBox='0 0 20 20'></svg>
              <p></p>
            </div>
            <div className='profile-infosmall'>
            <h1>User Name</h1>
            <p>Server Name</p>
            </div>
          </div>
            <div className='profileUser_right'>
                <div id='user-Wpm'>
                    <div className='profileUser_title'>
                        <p>WPM</p>
                       <div className='profileUser_underline'>
                          <div className='profileUser_MULine'></div>
                          <div className='profileUser_BMULine'></div>
                       </div> 
                    </div>           
                    
                    <div id='user-wpm-results'>
                      <div  className='user-result' id='wpm-avg'>
                        <p>Avg</p>
                        <h1>00</h1>
                        <span>wpm</span>
                      </div>
                      <div className='user-result' id='wpm-best'>
                        <p>Best</p>
                        <h1>00</h1>
                        <span>wpm</span>
                      </div>
                    </div>

                    <div className='user_Status'>
                      <div className='profileUser_title'>
                        <p>RECENT</p>  
                          <div className='profileUser_underline'>
                            <div className='profileUser_MULine'></div>
                            <div className='profileUser_BMULine'></div>
                          </div>
                        </div>     
                      <div className='user_MaxWpm'>
                        <p>Max 200 WPM</p>
                      </div> 
                    <Testbar />
                  </div>                  
                </div>
                  <Nav />
            </div>
        </main>
        </div>
      )
    }
  }
export default Profile;