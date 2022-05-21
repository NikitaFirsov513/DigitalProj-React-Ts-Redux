import { createSlice } from "@reduxjs/toolkit";
import { TAllOrder } from "../../data/allOrder";
import { setAllOrder } from "../actions/allOrderActions";



export type IAllOrder = {

    orderList: TAllOrder,

}

const initialState: IAllOrder = {

    orderList: [],

}


const sliceAllOrder = "allOrder";

const allOrderSlice = createSlice({


    name: sliceAllOrder,
    initialState,
    reducers: {


    },

    extraReducers: (builder) => {

        builder.addCase(setAllOrder.fulfilled, (state, action) => {

            state.orderList = action.payload;

        })
    }
})


export default allOrderSlice;