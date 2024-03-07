// src/ProductList.js

import React, { useState, useEffect } from "react"
import connection from "./db"

function ProductList() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    // Query to fetch data from 'products' table
    const query = "SELECT * FROM products"
    connection.query(query, function (err, result) {
      if (err) throw err
      setProducts(result)
    })
  }, [])

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map((product, index) => (
          <li key={index}>{product.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default ProductList
