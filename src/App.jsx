import { useEffect, useState } from "react";
import "./App.css";

import ProductCard from "./products/ProductCard";
import Navbar from "./Layout/Layout.jsx";
import { SearchBar } from "./SearchBar/SearchBar";
import { ProductsList } from "./ProductsList/ProductsList";

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
      <Navbar />
      <SearchBar handleSearch={handleSearch} searchTerm={searchTerm} />
      <ProductsList>
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            images={product.images}
            title={product.title}
            price={product.price}
          />
        ))}
      </ProductsList>
    </>
  );
}

export default App;
