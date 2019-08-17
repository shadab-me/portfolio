 import React from 'react';
 import Nav from '../nav/nav';
 import User from '../user/user';
import Work from '../work/work';
import Contact from '../contact/contact'
import Right from '../rights/right';
 class App extends React.Component{
   render(){
     return(
       <div className = 'app'>
       <Nav/>
       <User/>
       <Work/>
       <Contact/>
       <Right/>
       </div>
       )
   }
 }

export default App;
