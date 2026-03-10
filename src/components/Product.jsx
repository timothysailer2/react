function Product({product}) {

  const addToCart = () => {
    alert(product.name + " added to cart!");
  };

  return (
    <div className="card p-3">

      <img src={product.image} className="card-img-top"/>

      <div className="card-body">

        <h5>{product.name}</h5>

        <p>{product.description}</p>

        <p><strong>${product.price}</strong></p>

        <button
          className="btn btn-primary"
          onClick={addToCart}
        >
          Add to Cart
        </button>

      </div>

    </div>
  );
}

export default Product;