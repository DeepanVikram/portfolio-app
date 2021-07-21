import React, { Component } from 'react'
import './education.css';

export default class Education extends Component {
  render() {
    return (
    <div id='education'>
      <div className='table'>
        <div className='tcontent'>
          <h1 className='thead'>Education Qualification</h1>
        <table>
          <tr>
            <th>Degree/Grade</th>
            <th>Institution Name</th>
            <th>Marks Obtained</th>
          </tr>
          <tr>
            <td>B.E-Mechanical Engineering(2017-2021</td>
            <td>Government College Of Engineering Salem-11</td>
            <td>7.3(cgpa)</td>
          </tr>
          <tr>
            <td>Diplamo In Automobile Engineering(2016-2018)</td>
            <td>KonguNadu Polytechnic College Thottiam</td>
            <td>96.25%</td>
          </tr>
          <tr>
            <td>Higher Secondary Education(2015-2016)</td>
            <td>J.K.K.Nataraja Matriculation Higher Secondary School</td>
            <td>68%</td>
          </tr>
          <tr>
            <td>Senior Secondary Education(2013-2014)</td>
            <td>J.K.K.Nataraja Matriculation Higher Secondary School</td>
            <td>79%</td>
          </tr>
        </table>
        </div>
      </div>
    </div> 
    )
  }
}

