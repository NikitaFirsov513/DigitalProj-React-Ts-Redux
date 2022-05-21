import { createSlice } from "@reduxjs/toolkit";
import { productDataType, productDataTypeElement } from "../../data/productData";


export interface IBasketState {
    basketList: productDataType,
};

const initialState: IBasketState = {
    basketList: [],
};

const basket = "basket";


const basketSlice = createSlice({

    name: basket,
    initialState,
    reducers: {
        addToCard: (state, action) => {

            let list = action.payload;
            state.basketList.push({ ...list, "kol": 1, "sum": list['price'] });

        },

        delateFromCard: (state, action) => {

            let newCardList = JSON.parse(JSON.stringify(state, undefined, 2)).basketList;
            const element = action.payload;
            let indexElement = null;

            newCardList.forEach((e: productDataTypeElement, index: number) => {

                if (e.name == element.name) {
                    indexElement = index;
                }

            })
            newCardList.splice(indexElement, 1)
            state.basketList = newCardList;

        },

        addOne: (state, action) => {

            let newCardList: productDataType = JSON.parse(JSON.stringify(state, undefined, 2)).basketList;
            const element: productDataTypeElement = action.payload;
            const elementName = element.name;

            if (!Array.isArray(newCardList))
                return;


            newCardList.forEach((elem, index) => {
                if (
                    elem.name == elementName &&
                    elem.balance > element['kol']
                ) {
                    elem['kol'] = element['kol'] + 1;
                    elem['sum'] = element['kol'] * element.price;
                }
            })

            state.basketList = newCardList;


        },

        difOne: (state, action) => {


            let newCardList: productDataType = JSON.parse(JSON.stringify(state, undefined, 2)).basketList;
            const element: productDataTypeElement = action.payload;
            const elementName = element.name;

            if (!Array.isArray(newCardList))
                return;


            newCardList.forEach((elem, index) => {
                if (
                    elem.name == elementName &&
                    element['kol'] > 1
                ) {
                    elem['kol'] = element['kol'] - 1;
                    elem['sum'] = element['kol'] * element.price;
                }
            })

            state.basketList = newCardList;


        }



    }



})


export const {
    addToCard,
    delateFromCard,
    addOne,
    difOne,
} = basketSlice.actions;


export default basketSlice;

