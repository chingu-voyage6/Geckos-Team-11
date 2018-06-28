import React, { Component } from 'react';

  class Landingpage extends Component{
    render(){
      return(
        <main id='main-home'>
          <section id='login-section'>
            <h1>TYPE</h1>
            <div id='login-options'>
              <p className='padding-ten'>GET IN WITH</p>
              <button id='facebook-btn' className='homepage-btn'>Facebook</button>
              <button id='google-btn' className='homepage-btn'>Google</button>
            </div>
            <div id='home-footer'>
              <a href='/privacy'>PRIVACY</a>
              <a href='/privacy'>TERMS</a>
            </div>
          </section>            
          <article id='home-article'>
            <h2 id='home-article-header'>Improve your Typing Skills with your friends</h2>
            <p id='home-article-para'>If you type adeptly with 10 fingers, you're typing faster than your mind is working.
              <br/>
              <span>James A. Michener</span>
            </p>
          </article>
        </main>
      )
    }
  }
export default Landingpage;