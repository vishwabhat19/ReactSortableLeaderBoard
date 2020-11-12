import React, { Component } from 'react';
import Age from './Age';
import Name from './Name';
import Points from './Points';
import Rank from './Rank';
import Table from './Table';



    
class App extends Component{
     
    


   render(){
       return(
           <div className="text-center buttons">
               <header className="text-center">
                   <h1>Leaderboard</h1>
               </header>
               <div className ="text-center buttons">
                    
                    <Table></Table>
               </div>
           </div>
       );
   }
    
}

export default App;