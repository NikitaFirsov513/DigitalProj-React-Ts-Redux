import { createSlice } from "@reduxjs/toolkit";
import { setCategoryList } from "../actions/menuActions";
import { menuData } from "../../data/menuData";

export interface IMenuState {
    categoryList: any;
}

const initialState: IMenuState = {
    categoryList: null,
}

const sliceMenu = "menu";

const menuSlice = createSlice({
    name: sliceMenu,
    initialState,
    reducers: {
        /*------*/
    },
    extraReducers: (builder) => {
        builder.addCase(setCategoryList.fulfilled, (state, action) => {
            
            state.categoryList = action.payload;
            //console.log(menuData)

        })
    }





})

export default menuSlice;