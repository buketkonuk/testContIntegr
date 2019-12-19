import React from "react"
import productsData from "./products"

function App() {
  return (
    <div>
      <h2>Hello Kodiri bootCamp!</h2>
      <h3>Does this still work?</h3>
        {productsData.map(product => 
          <div>
          <p>product Name: {product.name}</p>
          <p>Description: {product.description}</p>
          <p>Price: £{product.price}</p>
          
          </div>
        

        )}
    </div>
  )
}

export default App;