import { createSlice } from "@reduxjs/toolkit";
import { productData, productDataType } from "../../data/productData";
import { setProductList } from "../actions/productListActions";


export interface IProductListState {
    productList: productDataType | null;

}

const initialState: IProductListState = {
    productList: null,
}

const sliceProduct = "productList";

const productListSlice = createSlice({
    name: sliceProduct,
    initialState,
    reducers: {
        /*------*/

    },
    extraReducers: (builder) => {
        builder.addCase(setProductList.fulfilled, (state, action) => {
            state.productList = action.payload;
            console.log(action)
        })
    }

})

export default productListSlice;


/*builder.addCase(setCategoryList.fulfilled, (state, action) => {

            state.categoryList = menuData;
            //console.log(menuData)

        })*/