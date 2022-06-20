import { createSlice } from "@reduxjs/toolkit";
import { productDataType } from "../../data/productData";


export interface ISliderListState {
    sliderList: { [arg: string]: productDataType } | null
}

const initialState: ISliderListState = {
    sliderList: null,
}
const sliceSliderList = "sliderlist";


const sliderListSlice = createSlice({
    name: sliceSliderList,
    initialState,
    reducers: {
        /*------*/
        addSlider: (state, action) => {

            const query: string | string[] = action.payload.query;
            const productList: productDataType = action.payload.productList;
            const sliderList = JSON.parse(JSON.stringify(state, undefined, 2)).sliderList;
            let newSliderList = sliderList === null ? {} : sliderList;

            if (productList == null) {
                return
            }

            if (Array.isArray(query)) {
                query.forEach(element => {
                    if (!(element in newSliderList)) {
                        newSliderList[element] = [];
                        productList.forEach(elem => {
                            if (elem['name'].toLocaleLowerCase().includes(element.toLowerCase())) {
                                newSliderList[element].push(elem);
                            }
                        })
                    }
                })
            }
            state.sliderList = newSliderList;
        }
    },
    extraReducers: (builder) => {

    }

})

export const { addSlider } = sliderListSlice.actions;

export default sliderListSlice;
