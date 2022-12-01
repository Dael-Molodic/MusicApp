import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Product.css"

function Product() {
  const [product, setProduct] = useState(-1);
  const { ProductId } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${ProductId}`)
            .then(res=>res.json())
            .then(json=> setProduct(json))
  }, [])

  return (product === -1)
  ? <h1>Loading.....</h1>
  : (
    <div className="product-container">
      <img src={product.image} alt={product.title} />
      <div className="title">{product.title}</div>
      <div className="price">{product.price}$</div>
      <div className="description">{product.description}</div>
    </div>
  )
}

export default Product
