import React from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  // const [questions, setquestions] = useState(data)
  return (
    <div className="container">
      <h3>Questions And Answers About Login</h3>
      <section className="info">
        {
          data.map((question)=>{
           return <SingleQuestion key={question.id} {...question}/>
          })
        }
      </section>
    </div>
  )
}

export default App;
