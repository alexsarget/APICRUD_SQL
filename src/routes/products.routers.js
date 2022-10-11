import { Router } from "express";
import {createNewProduct, getProducts,getProducById, deleteProductById, getTotalProducts, updateProductById} from "../controllers/products_controllers"


const router=Router();

router.get('/products',getProducts);

//para crear productos
router.post('/products', createNewProduct);  

//eliminar productos
router.delete('/products/:id',deleteProductById);

//actualizar producto
router.put('/products/:id',updateProductById); 

// contar un producto 
router.get('/products/count', getTotalProducts); 

//Obtener un producto por id
router.get('/products/:id',getProducById); 

export default router;