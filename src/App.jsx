import { useState, useEffect } from 'react'
import './App.css'
import ProductCard from './products/ProductCard';

  
  function App() {
    const [products, setProducts] = useState([]);
  
    useEffect(() => {
      fetch("https://dummyjson.com/products?limit=100")
        .then((res) => res.json())
        .then((data) => {
          setProducts(data.products);
        });
    }, []);
  
    return (
      <div>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          images={product.images}
          title={product.title}
          price={product.price}
        />
      ))}
    </div>
  );
  }



export default App
