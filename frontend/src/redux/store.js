import {configureStore} from '@reduxjs/toolkit';
import { userReducer } from './reducers/user';
import { productReducer } from './reducers/product';
import { sellerReducer } from './reducers/seller';



const Store = configureStore({
    reducer:{
        user: userReducer,
        seller: sellerReducer,
        products:productReducer,
    }
});

export default Store;