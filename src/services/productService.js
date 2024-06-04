import axios from "axios";

class ProductService {
    static getAllProducts = () => axios.get('/products?limit=50&skip=80')
    static getProductByCategory = () => axios.get('/products/category/smartphones')
}

export default ProductService;


