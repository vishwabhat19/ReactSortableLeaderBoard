import React from 'react';



const Points = props =>{

 

  return(
    <button className="btn btn-primary points" name="points" onClick={() => props.onClick('points')}>Points</button>
  );
}

export default Points;
