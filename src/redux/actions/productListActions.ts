import { createAsyncThunk } from "@reduxjs/toolkit";
import { productData } from "../../data/productData";


const ProductListActions = {
    SET_PRODUCT_LIST: "menu/setProductList",
}


export const setProductList = createAsyncThunk(

    ProductListActions.SET_PRODUCT_LIST,
    async function () {


        await setTimeout(() => { }, 3000)

        return Promise.resolve(productData);
        // return new Promise((res, rej) => { res(productData ) })
        /* return await setTimeout(() => {
             console.log("asd");
             //return productData;
             return new Promise((res, rej) => { res(productData) })
         }, 2000)*/
    }

)

