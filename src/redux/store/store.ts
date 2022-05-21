import { configureStore, combineReducers } from "@reduxjs/toolkit";

import menuSlice from "../reducers/menuReducer";
import productListSlice from "../reducers/productList";
import sliderListSlice from "../reducers/sliderList";
import searchSlice from "../reducers/searchReducer";
import basketSlice from "../reducers/basketReducer";
import productSlice from "../reducers/productReducer";
import compareSlice from "../reducers/compareReducer";
import authSlice from "../reducers/authReducer";
import allOrderSlice from "../reducers/allOrderReduser";

const reducers = {
    menu: menuSlice.reducer,
    productList: productListSlice.reducer,
    slider: sliderListSlice.reducer,
    search: searchSlice.reducer,
    basket: basketSlice.reducer,
    product: productSlice.reducer,
    compare: compareSlice.reducer,
    auth: authSlice.reducer,
    allOrder: allOrderSlice.reducer,
    
};

const rootReducer = combineReducers({
    ...reducers,
});

export type RootState = ReturnType<typeof rootReducer>

const setupStore = () =>
    configureStore({
        reducer: rootReducer,
    });

export default setupStore;
