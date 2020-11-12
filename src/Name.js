import React from 'react';


const Name = props =>{

 

  return(
    <button className="btn btn-primary name" name="name" onClick={() => props.onClick('name')}>Name</button>
  );
}

export default Name;
