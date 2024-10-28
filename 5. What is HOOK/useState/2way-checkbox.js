import { useState } from 'react'

const gifts = [
  'CPU i9',
  'RAM 32GB RGB',
  'RGB Keyboard',
]
// Response from API
const courses = [
  {
    id: 1,
    name: 'HTML, CSS',
  },
  {
    id: 2,
    name: 'Javascript',
  },
  {
    id: 3,
    name: 'ReactJS',
  }
]
function App() {
  const [checked, setChecked] = useState([])
  const handleCheck = (id) => {
      setChecked(prev => {
          const isChecked = checked.includes(id);
          if(isChecked) {
            return checked.filter(item => item !==id)
          }
          else {
            return [...prev, id]
          }
      });
  }
  const handleSubmit = () => {
      console.log({id: checked});
  }
  // console.log(name);
  return (
    <div style={{ padding: 30 }}>
      {
        courses.map(course => (
          <div key={course.id}>
            <input
              type='checkbox'
              checked={checked.includes(course.id)}
              onChange={() => handleCheck(course.id)}
            />
            {course.name}
          </div>
        ))
      }
      <button onClick={handleSubmit}> Register </button>
    </div>
  )
}

export default App;
