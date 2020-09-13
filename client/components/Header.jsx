
const titleStyle = {
  color: "#00bfff"
}

import React, { Component } from 'react';
import '../style.css';
import { rgbToHex } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Tabs from '@material-ui/core/Tabs';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import Avatar from '@material-ui/core/Avatar';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';

// export default class Header extends Component {
//   render() {
//     return (
//       <div>
//         <p>Axolotl</p>
//         <ul>
//           <li><a href="#home">Home</a></li>
//           <li><a href="#news">News</a></li>
//           <li><a href="#contact">Contact</a></li>
//           <li><a className="active" href="#about">About</a></li>
//         </ul>
//       </div>
//     )
//   }
// }

const Header = (props) => (
  <div className='navBar'>
    <ul className='navLeft'>
      {/* <li>
        <a to='/' style={{ color: 'blue' }}>
          Home
        </a>
      </li>
      <li>
        <a to='/about' style={{ color: 'blue' }}>
          About
        </a>
      </li>
    </ul>
    <ul className='navRight'>
      <li>
        <a to='/login' style={{ color: 'blue' }}>
          Login
        </a>
      </li> */}
      <li>
        <a to='/signup' style={{ color: 'blue' }}>
          Logout
        </a>
      </li>
    </ul>
  </div>
);
export default Header;
