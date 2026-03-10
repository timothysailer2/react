import QuantityPicker from "./QuantityPicker";

function Product({ product }) {

  const handleQuantityChange = (qty) => {
    console.log(product.title + " quantity:", qty);
  };

  return (

    <div className="product-card">

      <img src={product.image} />

      <h3>{product.title}</h3>

      <p className="price">${product.price}</p>

      <QuantityPicker
        onQuantityChange={handleQuantityChange}
      />

      <button className="add-btn">
        Add to Cart
      </button>

    </div>

  );

}

export default Product;