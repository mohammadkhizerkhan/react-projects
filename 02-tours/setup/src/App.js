import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'

const url = 'https://course-api.com/react-tours-project'


function App() {
    const [loading, setloading] = useState(true);
    const [tours, settours] = useState([])

    const removeTours=(id)=>{
      const updatedTours=tours.filter(tour=>tour.id !== id)
      settours(updatedTours)
    }
    const fetchApi=async ()=>{
      setloading(true)
      try {
        const res=await fetch(url);
        const data=await res.json();
        settours(data)
        setloading(false)
      } catch (error) {
        setloading(false)
        console.log(error)
      }
    }

    useEffect(() => {
      fetchApi();
    }, [])


    if(loading){
      return (
        <main>
          <Loading />
        </main>
      )
    }

    if(tours.length===0){
      return <main>
        <div className="title">
          <h2>no tours left</h2>
          <div className="underline"></div>
        <button className="btn" onClick={fetchApi}>fetch</button>
          </div>
      </main>
    }



  return <main>
    {/* here i am passing the whole data, destructure in Tours.js component */}
    <Tours tours={tours} removeTours={removeTours}/>
  </main>
}

export default App
