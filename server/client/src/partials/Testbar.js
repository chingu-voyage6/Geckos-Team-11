import React, { Component } from 'react';

class Testbar extends Component{
  render(){
    return(
            <div id='recent-progress'>
              <div className='user_singleGraph'>
                <div className='user_leftNum'>
                  <p>File Name</p>
                </div>
                <div className='user_rightSide'>
                  <div className='user_graphLWrapper2'></div>
                  <div className='user_blurGraphLine2'></div>
                </div>
                <div className='user_realWpm'>
                  <p>30WPM</p>
                </div>
              </div>
            </div> 
    )
  }
}
export default Testbar;