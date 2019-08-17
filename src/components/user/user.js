import React from 'react';
import './user.css';
 


const User = function(){
     const username = "Shadab Ali";
     return(
        <div className = "container">
        <div className = 'UserImg'>
        
        <div className ="img">
        <img src = "https://avatars0.githubusercontent.com/u/38420725?s=400&u=8419d7bda33cac8f22bc97ef795e67c2d9020a14&v=4" alt = {username}></img>
        </div>
        
        <div className = "UserInfo">
         <h1>Shadab Ali </h1> 
         <p>React Developer </p>
          </div>
        </div>
        <hr></hr>
        <div className = 'UserDescription'>
        <p> React Developer from Rampur, India. I specialize in clean, minimalistic aesthetic with a strong focus on User Experience, Website Design And . Available for projects around the world. <span id = "talk"><a href = "#">Let's Talk</a></span></p>
         </div>
        
        </div>
    )
}
export default User;