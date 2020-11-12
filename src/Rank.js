import React from 'react';



const Rank = props =>{

 

  return(
    <button className="btn btn-primary rank" name="rank" onClick={() => props.onClick('rank')}>Rank</button>
  );
}

export default Rank;
