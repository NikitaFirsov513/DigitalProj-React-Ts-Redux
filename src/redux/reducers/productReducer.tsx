import { createSlice } from "@reduxjs/toolkit";
import { productData, productDataType, productDataTypeElement } from "../../data/productData";


export interface IProductState {
    product: productDataTypeElement | null,
    memoryList: { memory: string, name: string }[],
    colorList: { color: string, name: string }[],

}

const initialState: IProductState = {
    product: null,
    memoryList: [],
    colorList: [],
}

const sliceProduct = "product";

const productSlice = createSlice({

    name: sliceProduct,
    initialState,
    reducers: {
        /*------*/

        setProduct: (state, action) => {

            const name: string = action.payload.name;
            const productList: productDataType = action.payload.productList;
            let product: productDataTypeElement | null = null;
            let memoryList: any[] = [];
            let colorList: any[] = [];

            if (!Array.isArray(productList))
                return;

            productList.forEach((elem, index) => {
                if (elem.name === name) {
                    product = elem;
                }


            })


            productList.forEach((elem, index) => {

                const isBrand = elem.brand === product?.brand;
                const isModel = elem.model === product?.model;
                const someMemoryIndex = memoryList.some(memoryElement => memoryElement.memory === elem?.memory);



                if (!someMemoryIndex && isBrand && isModel) {




                    memoryList.push({ memory: elem?.memory, name: elem.name });
                }


                const someColorIndex = colorList.some(colorElement => colorElement === elem?.colorHex);

                if (!someColorIndex && isBrand && isModel) {
                    colorList.push({ color: elem?.colorHex, name: elem.name });
                }

            })





            state.colorList = colorList;
            state.memoryList = memoryList;



            state.product = product;

        },

        setProductByElem: (state, action) => {

            const product = action.payload;
            state.product = product


        }



    },
})

export default productSlice;

export const {

    setProduct,
    setProductByElem,

} = productSlice.actions;