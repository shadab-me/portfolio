import React from 'react';
import './nav.css';


class Nav extends React.Component{
    render(){
      return(
        <div className ='header'>
        <div className = 'logo'>
        <a>LOGO</a>
          
        </div>
        <div className = 'nav'>
        <ul>
        <li><a href = "#">Works</a></li>
        <li><a href = "#">Contact</a></li>
        </ul>
        </div>
         </div>
        )
    }
  }
export default Nav;