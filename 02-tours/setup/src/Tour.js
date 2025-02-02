import React, { useState } from 'react';

const Tour = ({id,name,info,image,price,removeTours}) => {
  const [toggle, settoggle] = useState(false)

  return <article className='single-tour'>
    <img src={image} alt={name}/>
    <footer>
      <div className="tour-info">
        <h4>{name}</h4>
        <h4 className="tour-price">{price}</h4>
      </div>
      <p>{toggle?info:`${info.substring(0,200)}...`}<button  onClick={()=>settoggle(!toggle)}>{toggle?"show less":"readmore"}</button>
      </p>
      <button className="delete-btn" onClick={()=>removeTours(id)}>not intersted</button>
    </footer>
  </article>;
};

export default Tour;
