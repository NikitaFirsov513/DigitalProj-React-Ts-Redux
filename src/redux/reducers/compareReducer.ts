import { createSlice } from "@reduxjs/toolkit";
import { productDataType, productDataTypeElement } from "../../data/productData";

type TCompareList = { categoryName: string, productList: productDataType }[]


export interface ICompareState {

    compareList: TCompareList;
    totalCol: number;

};

const initialState: ICompareState = {
    compareList: [],
    totalCol: 0
};

const compare = "compare";

const compareSlice = createSlice({

    name: compare,
    initialState,
    reducers: {

        toggleToCompareList: (state, action) => {

            let compareList: TCompareList = JSON.parse(JSON.stringify(state, undefined, 2)).compareList;
            const element: productDataTypeElement = action.payload;
            let totalCol = JSON.parse(JSON.stringify(state, undefined, 2)).totalCol;

            if (compareList.length === 0) {
                compareList.push({ categoryName: element.category, productList: [element] })
                totalCol++;
                state.totalCol = totalCol;
                state.compareList = compareList;
                return;
            }

            const isFindCategory = compareList.some((e) => {
                return e.categoryName === element.category;
            });


            if (!isFindCategory) {

                compareList.push({ categoryName: element.category, productList: [element] })
                totalCol++;
                state.totalCol = totalCol;
                state.compareList = compareList;
                return;

            }

            compareList = compareList.map((elem, index) => {

                if (elem.categoryName === element.category) {

                    let isElementInArray = null;
                    elem.productList.forEach((e, index) => {
                        if (e.name === element.name)
                            isElementInArray = index;
                    })
                    console.group();

                    console.log("isElementInArray>" + isElementInArray);

                    console.groupEnd();
                    if (isElementInArray !== null) {
                        elem.productList.splice(isElementInArray, 1);
                        totalCol--;
                        // state.totalCol = totalCol;
                    }
                    else {
                        elem.productList.push(element);
                        totalCol++;
                    }


                    return elem;


                }



                return elem;



            })

            //console.log(compareList)

            state.totalCol = totalCol;
            state.compareList = compareList;
            return;




        },

    }

})

export const {


    toggleToCompareList,

} = compareSlice.actions;


export default compareSlice;
