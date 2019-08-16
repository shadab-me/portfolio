import React from 'react';
import './work.css';
import project1 from '../asset/project1 (1).jpg'
import project2 from '../asset/project1 (2).jpg'
import project3 from '../asset/project1 (3).jpg'
import project4 from '../asset/project1 (4).jpg'
import project5 from '../asset/project1 (5).jpg'



 const Works = function(){
    return(
            <section className ="work">
            <div className = "project1">
             <img src = {project1}></img>

            </div>
            <div className = "project2">
             <img src = {project2}></img>

            </div>
            <div className = "project3">
             <img src = {project3}></img>

            </div>
            <div className = "project4">
             <img src = {project4}></img>

            </div>
            
            </section>
        )
    
}
export default Works;