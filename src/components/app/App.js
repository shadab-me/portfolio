 import React from 'react';
 import Nav from '../nav/nav';
 import User from '../user/user';
import Work from '../work/work';
 class App extends React.Component{
   render(){
     return(
       <div className = 'app'>
       <Nav/>
       <User/>
       <Work/>
       
       </div>
       )
   }
 }

export default App;
