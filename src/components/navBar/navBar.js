import React, { Component } from 'react';
import './navBar.css';


export default class NavBar extends Component {
  render() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <a href='/'>Home</a>
            </li>
            <li>
              <a href='#education'>Education</a>
            </li>
            <li>
              <a href='#skills'>Skills</a>
            </li>
            <li>
              <a href='#contact'>Contact</a>
            </li>
          </ul>
        </nav>
        
      </div>
    )
  }
}

