import { useEffect, useState } from "react"
import ListProductsComponent from "./components/ListProductsComponent";
import SingleProductComponent from "./components/SingleProductComponent";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  
  // state - da smestimo podatke
  const [isLoading, setIsLoading] = useState(false);
  const [allProducts, setAllProducts] = useState([]);


  useEffect(() => {

    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then((data) => {
         setAllProducts(data.products)
         setIsLoading(true);
      });

  }, []);



  return (
    <div>
      <h1>Radii</h1>

     <div className="flex flex-wrap items-center justify-center gap-[20px]">
      {isLoading ? allProducts.map((product) => {
          return <ListProductsComponent key={product.id} product={product} />
        }) : <h2>LOADING...</h2>}
     </div>

     <SingleProductComponent />

      


      <ToastContainer />
    </div>
  )
}

export default App
