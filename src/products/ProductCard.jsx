import '../products/products.css'


function ProductCard({images, title, price}) {
    return (
      <>
      <div className="productCard">
        <figure>
          <img src={images[0]} alt={title} />
        </figure>
        <p>{title}</p>
        <p>$ {price}</p>
       <button>Añadir al carrito</button>
        </div>
      </>
     
    );
  }

  export default ProductCard