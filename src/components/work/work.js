import React from 'react';
import './work.css';
import advocate from '../asset/advocate.PNG';
import bootstrapProjet from '../asset/bootstrap.PNG';
import bootstrapProjet2 from '../asset/bootstrap2.PNG';
import cssPractice from '../asset/css practice.PNG';
import preview from '../asset/Preview.jpg';
import product from '../asset/productlanding page.PNG';
import rock from '../asset/rockpaper.PNG';







 const Works = function(){
    return(
            <section className ="work">
            
        
            <div className = "project2 project">
             <img src = {bootstrapProjet}></img>

            </div>
            <div className = "project3 project">
             <img src = {bootstrapProjet2}></img>

            </div>
            <div className = "project4 project">
             <img src = {cssPractice}></img>
            </div>
            

            <div className = "project5 project">
             <img src = {preview}></img>

            </div>

            <div className = "project1 project">
             <img src = {advocate}></img>

            </div>
            <div className = "project6 project">
             <img src = {product}></img>
            </div>
   
            <div className = "project7 project">
             <img src = {rock}></img>

            </div>
            <div className = "project3 project">
             <img src = {bootstrapProjet2}></img>
            </div>
            </section>
        )
    
}
export default Works;