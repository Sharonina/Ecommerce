import { useEffect, useState } from "react";
import "./App.css";

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
    <>
      <div>
        {products.map((product) => (
          <>
            <figure>
              <img src={product.images[0]} />
            </figure>
            <p>{product.title}</p>
            <p>{product.price}</p>
          </>
        ))}
      </div>
    </>
  );
}

export default App;
