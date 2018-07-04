import React, { Component } from 'react';
import '../App.css';

  class Landingpage extends Component{
    render(){
      return(
        <main id='main-home'>
          <section id='login-section'>
            <div className="landingLogo">
              <h1>TYPE</h1>
            </div>
            <div id='login-options'>
              <div className="topBar">
                <div className="bartop"></div>
                <div className="blurbar"></div>
              </div>
              <div className= 'loginSocial'>
                <p>GET IN WITH</p>
                <div className='loginButtons'>
                  <a className='fb-btn' href="/homepage">Facebook</a>
                  <a className='go-btn' href="/homepage">Google</a>
                </div>
                <div id='home-footer'>
                  <a href='/privacy'>PRIVACY</a>
                  <a href='/privacy'>TERMS</a>
                </div>
              </div> 
            
            </div>
          </section>   
          <div id='home-article'>
            <h2 id='home-article-header'>Improve your Typing Skills with your friends</h2>
            <p id='home-article-para'>If you type adeptly with 10 fingers, you're typing faster than your mind is working.
              <br/>
              <span>James A. Michener</span>
            </p>
          </div>
        </main>
      )
    }
  }
export default Landingpage;