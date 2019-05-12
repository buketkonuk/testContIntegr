import React from "react"
import productsData from "./products"

function App() {
  return (
    <div>
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