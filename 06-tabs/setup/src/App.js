import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'


function App() {
  const [loading, setloading] = useState(true)
  const [profile, setprofile] = useState([])
  const [value, setvalue] = useState(0)

  const fetchUrl=async()=>{
    const response=await fetch(url);
    const data=await response.json();
    setprofile(data)
    setloading(false)
  }
  useEffect(() => {
     fetchUrl();
  }, [])
  
  if(loading){
      return (
          <div className='title'>
            <h2>Loading...</h2>
          </div>
        )
      }


  // we should only destructure here 
  const {id,title,company,dates,duties}=profile[value]

  return (
    <section className="section">
      <div className="title">
        <h2>experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        <div className="btn-container">
          {
            profile.map((item,index)=>{
              return(
                <button key={item.id} onClick={()=>setvalue(index)} className={`job-btn ${index===value && "active-btn"}`}>{item.company}</button>
              )
            })
          }
        </div>
      </div>
      <article className="job-info">
        <h3>{title}</h3>
        <h4>{company}</h4>
        <p className='job-dates'>{dates}</p>
        {
          duties.map((duty,index)=>{
            return (
              <div className="job-desc" key={index}>
                <FaAngleDoubleRight className='job-icon'/>
                <p>{duty}</p>
              </div>
            )
          })
        }
      </article>
    </section>
  )
}

export default App
