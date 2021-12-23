import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [people, setpeople] = useState(data)
  console.log(people)
  return (
    <main>
      <div className="container">
        <h3>{people.length} birthdays today</h3>
        {
          people.map((person)=>{
            return <List key={person.id} {...person}/>
          })
        }
        <button className="btn" onClick={()=>setpeople([])}>Clear All</button>
      </div>
    </main>
  )
}

export default App;
