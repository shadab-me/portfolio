import React from 'react';
import './user.css';
 


const User = function(){
     const username = "Shadab Ali";
     return(
        <div className = "container">
        <div className = 'UserImg'>
        <img src = "https://avatars0.githubusercontent.com/u/38420725?s=400&u=8419d7bda33cac8f22bc97ef795e67c2d9020a14&v=4" alt = {username}></img>
         </div>
        <div className = 'UserDescription'>
        <p> Line 16:  The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md <a href = "#">Lets Talk</a> </p>
        
         </div>
        
        </div>
    )
}
export default User;