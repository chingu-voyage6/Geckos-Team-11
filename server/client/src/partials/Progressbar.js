import React, { Component } from 'react';

class Progressbar extends Component{
  render(){
    return(
      <div id='progressbar'>
        <label for="file">File progress</label>
        <progress id="progressbar" name="progressbar" max="100" value="70">
            70%
        </progress>
        <p>00 WPM</p>
      </div>
      
    )
  }
}
export default Progressbar;