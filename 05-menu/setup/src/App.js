import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allCategories=["all",...new Set(items.map((item)=>item.category))]
console.log(allCategories)

function App() {
  const [menuItems, setmenuItems] = useState(items);
  const [categories, setcategories] = useState(allCategories)

  const onFilter=(category)=>{
    console.log(category," clicked")
    if(category==="all"){
      setmenuItems(items)
      return;
    }
    const filtered=items.filter((item)=>item.category===category)
    console.log(filtered)
    setmenuItems(filtered)
  }
  
  return <>
  <main>
    <section className="menu section">
      <h2>Our Menu</h2>
      <div className="underline"></div>
      <Categories onFilter={onFilter} categories={categories}/>
      <Menu items={menuItems}/>
    </section>
  </main>
  </>
}

export default App;
