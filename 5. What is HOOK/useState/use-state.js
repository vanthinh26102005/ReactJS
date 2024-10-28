import { useState } from 'react'

const orders = [100, 200, 300]
function App() {
  const [info, setInfo] = useState({
      name: "Nguyen Van A",
      age: 19,
      address: "HCM, VN",
  })
  
  const handleIncresase = () => {
      setInfo({
        ...info,
        
        name1: "has been changed",
        age1: "has been changed",
        address1: "has been changed",
        des: "all thing has renewed not update from the last"
      });
  } 

  return (
    <div className="App" style ={{padding: 20}}>
      <h1> {JSON.stringify(info)}</h1>
      <button onClick={handleIncresase}> UpDate</button>
    </div>
  );
}

export default App;
