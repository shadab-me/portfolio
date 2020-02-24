import React from 'react';
import './nav.css';
 

 
class Nav extends React.Component{
  
    render(){
      return(
        <div className ='header'>
        <div className = 'logo'>
         <a><image src = "https://www.google.com/search?rlz=1C1CHBF_enIN843IN843&biw=1396&bih=657&tbm=isch&sa=1&ei=F7FXXcbRB4u-9QO70oOQBw&q=react+best+icon&oq=react+best+icon&gs_l=img.3..0i24.29872.37017..37311...2.0..0.976.10875.3-2j1j4j9......0....1..gws-wiz-img.......35i39j0j0i67j0i10j0i8i30.FvmPXGOGZeg&ved=0ahUKEwiGubyPtYnkAhULX30KHTvpAHIQ4dUDCAY&uact=5#imgrc=in8LRqjDdtVeLM:"></image></a>
          
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
    dis(){
 let ali = document.querySelector('#Ali');
 let nav = document.querySelector('.nav')
 console.log(ali)
     
     }
   }
export default Nav;