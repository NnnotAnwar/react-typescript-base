import React from "react";
import useProduct from "./hooks/products";
import Product from "./components/Product";
import Loader from "./components/Loader";
function App() {
  const { loading, products } = useProduct()
  const renderProduct = products.map(product => <Product product={product} key={product.id} />)
  return (
    <div>
      {loading ? <Loader /> : renderProduct}
    </div>
  )
}

export default App;
