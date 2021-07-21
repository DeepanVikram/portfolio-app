import './home.css';
import React, { Component } from 'react'
import Profile from './../../images/Profile.jpg'
export default class Home extends Component {
  render() {
    return (
      <div className='Home'>
         <div className='container'>
           <div className='content'>
           <h1>Hello.i'm <strong>Deepan Rajendran</strong></h1> <br/>
           <p> i am full stack developer passionate towards building applications that are<br/> 
             scalabel and maintainable with beautifully crafted code.
           </p>
           <img className='img' src={Profile} alt='profile'></img>
           </div>
         </div>
        
      </div>
    )
  }
}

