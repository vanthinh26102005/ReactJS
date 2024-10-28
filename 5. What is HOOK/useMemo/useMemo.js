import { useState, useMemo, memo } from "react";

function App() {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [products, setProducts] = useState([])

  const handleSubmit = () => {
    setProducts([...products, {
      name,
      price: parseInt(price) // because it's a string
    }])

    setName('');
    setPrice('');
  }
  const total = useMemo(() => {

    const res = products.reduce((res, prod) => {
      console.log('re-calculate')
      return res + prod.price;
    }, 0)
    
    return res
  }, [products])


  return (
    <div style={{ padding: '10px 32px' }}>
      <input
        value={name}
        placeholder="Enter name"
        onChange={e => setName(e.target.value)}
      />

      <br />

      <input
        value={price}
        placeholder="Enter price"
        onChange={e => setPrice(e.target.value)}
      />

      <br />

      <button onClick={handleSubmit}> Add</button>

      <br />

      Total: {total}
      <ul>
        {products.map((product, index) => (
          <li key={index}>{product.name} - {product.price}</li>
        ))}
      </ul>

    </div>
  )

}
export default App