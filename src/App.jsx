import { useEffect, useState } from "react";
import "./App.css";

import { SearchBar } from "./SearchBar/SearchBar";

function App() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=100")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      });
  }, []);

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);

    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(term)
    );
    setFilteredProducts(filtered);
  };

  return (
    <>
      <SearchBar handleSearch={handleSearch} searchTerm={searchTerm} />
      <div>
        {filteredProducts.map((product) => (
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
