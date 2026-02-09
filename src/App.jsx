import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const products = [
  {
    id: 1,
    name: "Dumbell",
    category: "0-15 kg",
    price:  249.99-499.99,
    inStock: true
  },
  
  {
    id: 2,
    name: "Dumbell",
    category: "16 - 25 kg",
    price:  599.99,
    inStock: true
  },

  {
    id: 3,
    name: "Dumbell",
    category: "26-40 kg",
    price:  899.99,
    inStock: true
  },

  {
    id: 4,
    name: "Dumbell",
    category: "41-50 kg",
    price:  1199.99,
    inStock: true
  },

  {
    id: 5,
    name: "Barbell",
    category: "20 kg",
    price:  499.99,
    inStock: true
  },

  {
    id: 6,
    name: "Lifting Straps",
    category: "Accessories",
    price:  249.99,
    inStock: true
  },

  {
    id: 7,
    name: "Wrist Wraps",
    category: "Accessories",
    price:  249.99,
    inStock: true
  },

  {
    id: 7,
    name: "Wrist Bands",
    category: "Accessories",
    price:  249.99,
    inStock: false
  },

  {
    id: 8,
    name: "Lifting Belt",
    category: "Accessories",
    price:  1499.99,
    inStock: true
  },

  {
    id: 9,
    name: "Resistance Bands",
    category: "Accessories",
    price:  149.99-599.99,
    inStock: false
  },

  {
    id: 10,
    name: "Chalk",
    category: "Accessories",
    price:  149.99,
    inStock: true
  }
];

let App = () => {
  const [count, setCount] = useState(0);

  const ProductList = ({ data }) => {
    return (
      <div>
        <h2>Product List</h2>
        <ul>
          {data.map((product) => (
            <li key={product.id}>
              {product.name}, {product.category}, {product.price}{" "}
              {product.inStock ? "(In Stock)" : "(Out of Stock)"}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div>
      <h1>Welcome to my APP</h1>
      <ProductList data={products} />
    </div>
  );
};

/*
The props are what allows the creation of dynamic and reusable interfaces. 
These are what makes the products present themselves in the website.
*/


export default App;
