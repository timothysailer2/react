import Product from "../components/Product";
import products from "../data/products";

function Catalog() {

  return (
    <div>

      <h1>Product Catalog</h1>

      <div className="row">

        {products.map((p) => (

          <div className="col-md-4 mb-4" key={p.id}>
            <Product product={p}/>
          </div>

        ))}

      </div>

    </div>
  );
}

export default Catalog;