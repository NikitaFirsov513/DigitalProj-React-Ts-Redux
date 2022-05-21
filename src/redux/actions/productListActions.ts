import { createAsyncThunk } from "@reduxjs/toolkit";
import { productData, productDataType } from "../../data/productData";


const ProductListActions = {
    SET_PRODUCT_LIST: "menu/setProductList",
}


export const setProductList = createAsyncThunk(

    ProductListActions.SET_PRODUCT_LIST,
    async function () {


        //await setTimeout(() => { }, 3000)

        let req
        while (1) {
            req = await fetch(`http://localhost:80/digital/hs/product/all`, { method: 'GET', });

            if (req.ok) {
                break;
            }
        }
        
        if (req !== undefined) {

            const data: any = await req.json();

            if (Array.isArray(data))
                data.map(elem => {

                    elem['urlName'] = JSON.parse(elem['urlName'])
                    elem['prop'] = JSON.parse(elem['prop']);
                    elem['mainProp'] = JSON.parse(elem['mainProp']);
                })




            return data;


        }



        // return Promise.resolve(productData);
        // return new Promise((res, rej) => { res(productData ) })
        /* return await setTimeout(() => {
             console.log("asd");
             //return productData;
             return new Promise((res, rej) => { res(productData) })
         }, 2000)*/
    }

)

