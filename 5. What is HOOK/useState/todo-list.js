import { useState } from 'react'

// Response from API

function App() {

  const [job, setJob] = useState('')
  const [jobs, setJobs] = useState(() => {
    const storageJobs = JSON.parse(localStorage.getItem('jobs')) //json -> arr
    return storageJobs
  }) //if undefine/null -> arr
  
  const handleSubmit = () => {
    setJobs(prev => {
      const newJobs = [...prev, job]
      //arr -> json
      const jsonJobs = JSON.stringify(newJobs);
      
      localStorage.setItem('jobs', jsonJobs)

      return newJobs
    })
    setJob('')
  }
  // console.log(name);
  return (
    <div style={{ padding: 30 }}>

      <input value={job}
        onChange={e => setJob(e.target.value)} />

      <button onClick={handleSubmit}>ADD</button>

      <ul>
        {
          jobs.map((job, index) => (
            <li key={index}> {job} </li>
          ))
        }
      </ul>
    </div>
  )
}

export default App;
