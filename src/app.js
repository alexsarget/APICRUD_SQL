import  express  from "express";
import config from "./config";

import productsRoutes from './routes/products.routers'

const app =express();



//settings
app.set('port', config.port)

//middlerwares
app.use(express.json())
app.use(express.urlencoded({extended:false}));


app.use(productsRoutes)

export default app