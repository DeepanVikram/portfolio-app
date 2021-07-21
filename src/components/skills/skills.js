import React, { Component } from 'react';
import './skills.css';
export default class Skills extends Component {
  render() {
    return (
      <div id='skills'>
        <h1 className='smain'>Skills & Certification</h1>
        <div className='skillb'>
          <h2 className='shead'>Skills</h2>
          <ul className='sul'>
            <li className='sl'>HTML</li>
            <li className='sl'>Css</li>
            <li className='sl'>Java Script</li>
            <li className='sl'>React.js</li>
            <li className='sl'>Node.js</li>
          </ul>
        </div>
        <div className='certification'>
          <h2 className='shead'>Certification</h2>
          <ul className='cul'>
            <li className='cl'>Web Development-Skill Safari</li>
            <li className='cl'>Basics Of c & cpp-InternShala</li>
            <li className='cl'>HTML & css-Udemy</li>
            <li className='cl'>Fire And Industrial Engineering-<br/>Adriot Gropus</li>
          </ul>
        </div>
      </div>
    )
  }
}

