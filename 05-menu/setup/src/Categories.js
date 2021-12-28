import React from 'react';

const Categories = ({onFilter,categories}) => {
  return <>
  <div className="btn-container">
    {
      categories.map((category,index)=>{
        return <button type='button' key={index} className='filter-btn' onClick={()=>onFilter(category)}>{category}</button>
      })
    }
  </div>
  </>
};

export default Categories;
