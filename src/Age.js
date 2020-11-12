import React from 'react';


  



const Age = props =>{

 

  return(
    <button className="btn btn-primary age" name="name" onClick={() => props.onClick('age')}>Age</button>
  );
}



export default Age;
