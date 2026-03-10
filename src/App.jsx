import Navbar from "./components/Navbar";
import Product from "./components/Product";
import products from "./data/products";
import "./App.css";

function App() {

  return (

    <div>

      <Navbar />

      <div className="products-container">

        {products.map((prod) => (

          <Product
            key={prod.id}
            product={prod}
          />

        ))}

      </div>

    </div>

  );

}

export default App;