import { createAsyncThunk } from "@reduxjs/toolkit";
import { menuData } from "../../data/menuData";

const MenuActions = {
    SET_CATEGORY_LIST: "menu/setCategoryList",
}

export const setCategoryList = createAsyncThunk(
    MenuActions.SET_CATEGORY_LIST,

    async function () {

        await setTimeout(() => { }, 3000)

        return Promise.resolve(menuData);
        /*let req = await fetch(`http://localhost:80/digital/hs/category/all`, { method: 'GET', });
        req = await req.json();
        return req;*/
        // await setTimeout(()=>{return true},5000)

    })
